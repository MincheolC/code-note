CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50),
    `email` VARCHAR(100),
    `phone` VARCHAR(20),
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--;;
CREATE TABLE `lottery_history` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `date` DATETIME NOT NULL COMMENT "복권 추첨 날짜",
    `winning_numbers` VARCHAR(100) NOT NULL COMMENT "1~28 일반볼 5개, 0~9 파워볼 1개",
    `total_reward` BIGINT NOT NULL COMMENT "총 상금액",
    `is_test` TINYINT(1) DEFAULT 0,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
--;;
INSERT INTO `users` (`name`, `email`, `phone`) VALUES ("차민철", "mccha0407@gmail.com", "01066470203");
--;;
INSERT INTO `lottery_history` (`date`, `winning_numbers`, `total_reward`, `is_test`) VALUES ("2021-12-05", "1,2,3,4,5,6", 123456, 1);
