CREATE TABLE t1 (
    tid INT NOT NULL AUTO_INCREMENT,
    TABLE_NAME VARCHAR(64),
    COLUMN_NAME VARCHAR(64),
    ORDINAL_POSITION INT,
    PRIMARY KEY(tid)
) ENGINE=InnoDB;

INSERT INTO t1
    SELECT NULL, TABLE_NAME, COLUMN_NAME, ORDINAL_POSITION FROM information_schema.COLUMNS;

INSERT INTO t1
    SELECT NULL, TABLE_NAME, COLUMN_NAME, ORDINAL_POSITION FROM t1;
-- 12번 실행

SELECT COUNT(*) FROM t1;
SELECT * FROM t1 ORDER BY tid ASC LIMIT 962815, 1;
SELECT * FROM t1 ORDER BY tid DESC LIMIT 962815, 1;


-- 전문 검색 인덱스
CREATE TABLE tb_test (
    doc_id INT,
    doc_body TEXT,
    PRIMARY KEY (doc_id),
    FULLTEXT KEY fx_docbody (doc_body) WITH PARSER ngram
) ENGINE=InnoDB;

SELECT * from tb_test WHERE MATCH(doc_body) AGAINST ('애플' IN BOOLEAN MODE);

-- 가상 칼럼을 이용한 인덱스
CREATE TABLE user (
    user_id BIGINT,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    PRIMARY KEY(user_id)
);

ALTER TABLE user 
    ADD full_name VARCHAR(30) AS (CONCAT(first_name, ' ', last_name)) VIRTUAL,
    ADD INDEX ix_fullname (full_name);

EXPLAIN SELECT * FROM user WHERE full_name="Matt Lee";

DROP TABLE user;

-- 함수를 이용한 인덱스
CREATE TABLE user (
    user_id BIGINT,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    PRIMARY KEY(user_id),
    INDEX ix_fullname ((CONCAT(first_name, ' ', last_name)))
);
EXPLAIN SELECT * FROM user WHERE CONCAT(first_name, ' ', last_name)="Matt Lee";

DROP TABLE user;

-- 멀티 밸류 인덱스
CREATE TABLE user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(10),
    last_name VARCHAR(10),
    credit_info JSON,
    INDEX my_creditscores ( (CAST(credit_info->'$.credit_scores' AS UNSIGNED ARRAY)) )
);

INSERT INTO user VALUES (1, 'Matt', 'Lee', '{"credit_scores":[360, 353, 351]}');

SELECT * FROM user WHERE 360 MEMBER OF(credit_info->'$.credit_scores');
EXPLAIN SELECT * FROM user WHERE 360 MEMBER OF(credit_info->'$.credit_scores');