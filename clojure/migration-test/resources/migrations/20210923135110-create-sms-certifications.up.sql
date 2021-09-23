CREATE TABLE `sms_certifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `recipient_no` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `confirmed_no` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_used` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` datetime NOT NULL DEFAULT ((now() + interval 5 minute)),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
