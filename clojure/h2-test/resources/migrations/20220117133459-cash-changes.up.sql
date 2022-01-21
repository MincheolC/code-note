CREATE TABLE `cash_changes` (
	`id` int NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL COMMENT '변경된 캐시의 유저 아이디',
	`charge_id` int COMMENT '충전 id',
	`change_type` varchar(20) COMMENT '사용 타입 CHARGE(+) | ORDER_CANCEL(+) | PAY(-) | REFUND(-)',
	`amount` bigint COMMENT '금액',
	`order_product_no` varchar(100) COMMENT '주문서의 상품번호',
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
