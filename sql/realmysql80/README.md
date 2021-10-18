# Real Mysql 8.0 예제 데이터
백은빈, 이성욱님이 지은 Real Mysql 8.0 개정판 예제 데이터 [원본 소스](https://github.com/wikibook/realmysql80/tree/main)

## Docker로 데이터 넣는 경우
```sh
docker exec -i [container_name] mysql -u [account] [db_name] < employees.sql
```

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY ''; -- 나중에 비번 다시 설정.
```