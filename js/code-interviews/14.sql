# 1. 둘 이상의 집을 대여한 모든 거주자의 목록을 구하는 SQL
select t.name from tenants t
inner join apt_tenants at on at.tenant_id = t.id
group by t.id having count(*) > 1;

select t.name from tenants t
inner join (select tenant_id from apt_tenants group by tenant_id having count(*) > 1) at on t.id = at.tenant_id;

# 2. Open 상태인 Request: 모든 건물 목록과 Status가 Open인 모든 Request의 개수를 구하라.
select b.name from buildings b
where b.id IN (select a.building_id from apartments a inner join requests r on r.apt_id = a.id where r.status = 'open' group by a.building_id);

select b.name, IF(ISNULL(rc.Count), 0, rc.Count) as 'Count' from buildings b
left join (select a.building_id, count(*) as 'Count' from requests r inner join apartments a on r.apt_id = a.id where r.status = 'open' group by a.building_id) rc
on rc.building_id = b.id;

# 3. Request를 Close로 바꾸기: 1번 빌딩에서 대규모 리모델링 공사를 진행 중이다. 이 건물에 있는 모든 집에 대한 모든 Request의 Status를 Close로 변경해라
update requests r set r.status = 'close' where r.apt_id IN (select a.id from apartments a where b.building_id = 1); 
