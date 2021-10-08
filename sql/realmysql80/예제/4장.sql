CREATE Table member (
m_id INT NOT NULL,
m_name VARCHAR(20) NOT NULL,
m_area VARCHAR(100) NOT NULL,
PRIMARY KEY (m_id),
INDEX ix_area (m_area)
);

INSERT INTO member (m_id, m_name, m_area) VALUES (12, '홍길동', '서울');
COMMIT;

UPDATE member SET m_area='경기' WHERE m_id = 12;
SELECT * FROM member WHERE m_id=12;

