CREATE TABLE IF NOT EXISTS `task` (
  `task_id` int AUTO_INCREMENT  PRIMARY KEY,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `deadline` varchar(20) NOT NULL,
  `created_at` date NOT NULL,
  `created_by` varchar(20) NOT NULL,
  `updated_at` date DEFAULT NULL,
    `updated_by` varchar(20) DEFAULT NULL
);


CREATE TABLE IF NOT EXISTS `subtask` (
  `subtask_id` int AUTO_INCREMENT  PRIMARY KEY,
  `title` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` date NOT NULL,
  `created_by` varchar(20) NOT NULL,
  `updated_at` date DEFAULT NULL,
    `updated_by` varchar(20) DEFAULT NULL
);