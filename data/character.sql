-- overextended.`characters` definition

CREATE TABLE `characters` (
  `charId` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userId` int(10) unsigned NOT NULL,
  `stateId` varchar(7) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dateOfBirth` date NOT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `lastPlayed` date NOT NULL DEFAULT curdate(),
  `isDead` tinyint(1) NOT NULL DEFAULT 0,
  `x` float DEFAULT NULL,
  `y` float DEFAULT NULL,
  `z` float DEFAULT NULL,
  `heading` float DEFAULT NULL,
  `health` tinyint(3) unsigned DEFAULT NULL,
  `armour` tinyint(3) unsigned DEFAULT NULL,
  `statuses` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT json_object() CHECK (json_valid(`statuses`)),
  `deleted` date DEFAULT NULL,
  PRIMARY KEY (`charId`),
  UNIQUE KEY `characters_stateId_unique` (`stateId`),
  KEY `characters_userId_key` (`userId`),
  CONSTRAINT `characters_userId_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;