-- full table scan & full index scan
explain select count(*) from employees;
explain select * from employees;

-- sort info (optimizer trace)
SET OPTIMIZER_TRACE="enabled=on",END_MARKERS_IN_JSON=on;
SET OPTIMIZER_TRACE_MAX_MEM_SIZE=1000000;

SELECT * from employees ORDER BY last_name LIMIT 100000, 1;
SELECT * FROM INFROMATION_SCHEMA.OPTIMIZER_TRACE;

-- order by (index 정렬)
EXPLAIN SELECT * FROM employees e, salaries s
WHERE s.emp_no=e.emp_no AND e.emp_no BETWEEN 100002 AND 100020
ORDER BY e.emp_no;

-- order by (join driving table)
EXPLAIN SELECT * FROM employees e, salaries s
WHERE s.emp_no=e.emp_no AND e.emp_no BETWEEN 100002 AND 100020
ORDER BY e.last_name;

-- order by (join driven table)
EXPLAIN SELECT * FROM employees e, salaries s
WHERE s.emp_no=e.emp_no AND e.emp_no BETWEEN 100002 AND 100020
ORDER BY s.salary;

-- sort variables
FLUSH STATUS;
SHOW STATUS LIKE "Sort%";

-- group by (loose index scan)
EXPLAIN SELECT emp_no FROM salaries WHERE from_date='1985-03-01' GROUP BY emp_no;

-- distinct
SELECT DISTINCT emp_no FROM salaries;
SELECT emp_no FROM salaries GROUP BY emp_no;

-- temporary table
FLUSH STATUS;
SELECT first_name, last_name FROM employees GROUP BY first_name, last_name;
SHOW SESSION STATUS LIKE 'Created_tmp%';

--- 고급 최적화
-- use_index_extension
EXPLAIN SELECT * FROM dept_emp WHERE from_date='1987-07-25' ORDER BY dept_no;

-- index_merge_intersection
EXPLAIN SELECT * FROM employees WHERE first_name='Georgi' AND emp_no BETWEEN 10000 AND 20000;

-- semi join 
SELECT * FROM employees e WHERE e.emp_no IN (SELECT de.emp_no FROM dept_emp de WHERE de.from_date='1995-01-01');

-- Table Pull-out
EXPLAIN SELECT * FROM employees e WHERE e.emp_no IN (SELECT de.emp_no FROM dept_emp de WHERE de.dept_no='d009');
SHOW WARNINGS;

-- First match
EXPLAIN SELECT * FROM employees e WHERE e.first_name='Matt' AND e.emp_no IN (
SELECT t.emp_no FROM titles t WHERE t.from_date BETWEEN '1995-01-01' AND '1995-01-30');

-- Loose scan
EXPLAIN SELECT * FROM departments d WHERE d.dept_no IN (SELECT de.dept_no FROM dept_emp de);

-- Materialize
EXPLAIN SELECT * FROM employees e WHERE e.emp_no IN (SELECT de.emp_no FROM dept_emp de WHERE de.from_date='1995-01-01');
EXPLAIN SELECT * FROM employees e WHERE e.emp_no IN (SELECT de.emp_no FROM dept_emp de WHERE de.from_date='1995-01-01' GROUP BY de.dept_no);

-- Duplicated Weed-out
EXPLAIN SELECT * FROM employees e WHERE e.emp_no IN (SELECT s.emp_no FROM salaries s WHERE s.salary > 150000);

-- Condition_fanout
SET optimizer_switch='condition_fanout_filter=off';
EXPLAIN SELECT * FROM employees e INNER JOIN salaries s ON s.emp_no=e.emp_no WHERE e.first_name='Matt' AND e.hire_date BETWEEN '1985-11-21' AND '1986-11-21';

SET optimizer_switch='condition_fanout_filter=on';
EXPLAIN SELECT * FROM employees e INNER JOIN salaries s ON s.emp_no=e.emp_no WHERE e.first_name='Matt' AND e.hire_date BETWEEN '1985-11-21' AND '1986-11-21';

-- derived merge
EXPLAIN SELECT * FROM (SELECT * FROM employees WHERE first_name='Matt') derived_table WHERE derived_table.hire_date='1986-04-03';
SHOW WARNINGS;