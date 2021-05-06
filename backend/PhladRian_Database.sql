-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2021 at 10:09 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PhladRian_Database`
--

-- --------------------------------------------------------

--
-- Table structure for table `AllEmail`
--

CREATE TABLE `AllEmail` (
  `Email_ID` int(255) NOT NULL,
  `Email` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AllEmail`
--

INSERT INTO `AllEmail` (`Email_ID`, `Email`) VALUES
(1, 'putthiwat.kmutt@gmail.com'),
(2, 'sunharn1998@gmail.com'),
(3, 'yaranaikabaidu@gmail.com'),
(4, 'kurenai.6shadow@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `ItemDonate`
--

CREATE TABLE `ItemDonate` (
  `Item_ID` int(255) NOT NULL,
  `Donor_ID` int(255) DEFAULT NULL,
  `Object` varchar(64) DEFAULT NULL,
  `Pic1` varbinary(8000) DEFAULT NULL,
  `Pic2` varbinary(8000) DEFAULT NULL,
  `Pic3` varbinary(8000) DEFAULT NULL,
  `Pic4` varbinary(8000) DEFAULT NULL,
  `Pic5` varbinary(8000) DEFAULT NULL,
  `Pic6` varbinary(8000) DEFAULT NULL,
  `Type_ID` int(255) DEFAULT NULL,
  `School_ID` int(255) DEFAULT NULL,
  `Quantity` int(255) DEFAULT NULL,
  `Quality` int(5) DEFAULT NULL,
  `Point` int(255) DEFAULT NULL,
  `Detail` varchar(999) DEFAULT NULL,
  `Warning` int(255) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ItemDonate`
--

INSERT INTO `ItemDonate` (`Item_ID`, `Donor_ID`, `Object`, `Pic1`, `Pic2`, `Pic3`, `Pic4`, `Pic5`, `Pic6`, `Type_ID`, `School_ID`, `Quantity`, `Quality`, `Point`, `Detail`, `Warning`, `State`) VALUES
(1, 1, 'English Book 3', 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 1, 1, 999, 5, 20, 'An English book for the high school year 3 education. Has little short notes and highlights which are useful for the exams.', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ItemReward`
--

CREATE TABLE `ItemReward` (
  `Reward_ID` int(255) NOT NULL,
  `Sponsor_ID` int(255) DEFAULT NULL,
  `Object` varchar(64) DEFAULT NULL,
  `Pic1` varbinary(8000) DEFAULT NULL,
  `Pic2` varbinary(8000) DEFAULT NULL,
  `Pic3` varbinary(8000) DEFAULT NULL,
  `Pic4` varbinary(8000) DEFAULT NULL,
  `Pic5` varbinary(8000) DEFAULT NULL,
  `Pic6` varbinary(8000) DEFAULT NULL,
  `Quantity` int(255) DEFAULT NULL,
  `Price` int(255) DEFAULT NULL,
  `Detail` varchar(999) DEFAULT NULL,
  `Warning` int(255) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ItemReward`
--

INSERT INTO `ItemReward` (`Reward_ID`, `Sponsor_ID`, `Object`, `Pic1`, `Pic2`, `Pic3`, `Pic4`, `Pic5`, `Pic6`, `Quantity`, `Price`, `Detail`, `Warning`, `State`) VALUES
(1, 1, 'Teddy Bear', 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 999, 25, 'The imported teddy bear product from Japan. Its body is squishy and has the lovely design.', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ListCompany`
--

CREATE TABLE `ListCompany` (
  `Company_ID` int(255) NOT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `Address` varchar(999) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListCompany`
--

INSERT INTO `ListCompany` (`Company_ID`, `Name`, `Address`, `State`) VALUES
(1, 'Grab', 'Pathum Wan, Pathum Wan District, Bangkok 10330', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ListItem`
--

CREATE TABLE `ListItem` (
  `Type_ID` int(255) NOT NULL,
  `Category` varchar(64) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListItem`
--

INSERT INTO `ListItem` (`Type_ID`, `Category`, `State`) VALUES
(1, 'Book', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ListSchool`
--

CREATE TABLE `ListSchool` (
  `School_ID` int(255) NOT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `Address` varchar(999) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListSchool`
--

INSERT INTO `ListSchool` (`School_ID`, `Name`, `Address`, `State`) VALUES
(1, 'Debsirin', '1466 Krung Kasem Rd, Wat Thepsirin, Pom Prap Sattru Phai, Bangkok 10100', 1),
(2, 'Suankularb', NULL, 1),
(3, 'Assumption', NULL, NULL),
(4, 'Bangkok Christian', NULL, NULL),
(5, 'Saint Gabriel', NULL, NULL),
(6, 'Saint Dominic', NULL, NULL),
(7, 'Vajiravudh', NULL, NULL),
(8, 'Wat Suthiwararam', NULL, NULL),
(9, 'Traimit', NULL, NULL),
(10, 'Wattana', NULL, NULL),
(11, 'Saint Joseph', NULL, NULL),
(12, 'Materdei', NULL, NULL),
(13, 'Satriwitthaya', NULL, NULL),
(14, 'Suksanari', NULL, NULL),
(15, 'Wat Mahapruettaram', NULL, NULL),
(16, 'Sainampeung', NULL, NULL),
(17, 'Saipanya', NULL, NULL),
(18, 'Phraharuthai', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `UserAdmin`
--

CREATE TABLE `UserAdmin` (
  `Admin_ID` int(255) NOT NULL,
  `Username` varchar(64) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `Password` varchar(32) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserAdmin`
--

INSERT INTO `UserAdmin` (`Admin_ID`, `Username`, `Email`, `Phone`, `Password`, `State`) VALUES
(1, 'Shiratasa Kusharane', 'kurenai.6shadow@gmail.com', '0891608019', 'godofdev', 1);

-- --------------------------------------------------------

--
-- Table structure for table `UserDonor`
--

CREATE TABLE `UserDonor` (
  `Donor_ID` int(255) NOT NULL,
  `Username` varchar(64) DEFAULT NULL,
  `Point` int(255) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `Password` varchar(32) DEFAULT NULL,
  `Address` varchar(999) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserDonor`
--

INSERT INTO `UserDonor` (`Donor_ID`, `Username`, `Point`, `Email`, `Phone`, `Password`, `Address`, `State`) VALUES
(1, 'Krittapas Sukkhasame', 999, 'sunharn1998@gmail.com', '0818173984', 'lazieboi', 'Room 101, 37/2 San Chaomae Thapthim Alley, Tha Kham, Bang Khun Thian, Bangkok 10150', 1);

-- --------------------------------------------------------

--
-- Table structure for table `UserSponsor`
--

CREATE TABLE `UserSponsor` (
  `Sponsor_ID` int(255) NOT NULL,
  `Company_ID` int(255) DEFAULT NULL,
  `Username` varchar(64) DEFAULT NULL,
  `Staff_Card` varchar(32) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `Password` varchar(32) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserSponsor`
--

INSERT INTO `UserSponsor` (`Sponsor_ID`, `Company_ID`, `Username`, `Staff_Card`, `Email`, `Phone`, `Password`, `State`) VALUES
(1, 1, 'Takakazu Abe', 'B9456888', 'yaranaikabaidu@gmail.com', '0867765634', 'xdeliver', 1);

-- --------------------------------------------------------

--
-- Table structure for table `UserStudent`
--

CREATE TABLE `UserStudent` (
  `Student_ID` int(255) NOT NULL,
  `School_ID` int(255) DEFAULT NULL,
  `Username` varchar(64) DEFAULT NULL,
  `Student_Card` varchar(32) DEFAULT NULL,
  `Image` varbinary(8000) DEFAULT NULL,
  `Grade` varchar(10) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `Phone` varchar(10) DEFAULT NULL,
  `Password` varchar(32) DEFAULT NULL,
  `Address` varchar(999) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserStudent`
--

INSERT INTO `UserStudent` (`Student_ID`, `School_ID`, `Username`, `Student_Card`, `Image`, `Grade`, `Email`, `Phone`, `Password`, `Address`, `State`) VALUES
(1, 1, 'Putthiwat Chalermvongsavej', '0010080243735', 0x5b76616c75652d365d, 'M6', 'putthiwat.kmutt@gmail.com', '0612562121', 'finalpro', '134/58, 30 Suk Sawat Rd, Bang Pakok, Rat Burana, Bangkok 10140', 1);

-- --------------------------------------------------------

--
-- Table structure for table `WebNotify`
--

CREATE TABLE `WebNotify` (
  `Notify_ID` int(255) NOT NULL,
  `School_ID` int(255) DEFAULT NULL,
  `Type_ID` int(255) DEFAULT NULL,
  `Student_ID` int(255) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `WebNotify`
--

INSERT INTO `WebNotify` (`Notify_ID`, `School_ID`, `Type_ID`, `Student_ID`, `State`) VALUES
(1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `WebReport`
--

CREATE TABLE `WebReport` (
  `Report_ID` int(255) NOT NULL,
  `Topic` varchar(64) DEFAULT NULL,
  `Email` varchar(64) DEFAULT NULL,
  `Message` varchar(999) DEFAULT NULL,
  `View` tinyint(1) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `WebReport`
--

INSERT INTO `WebReport` (`Report_ID`, `Topic`, `Email`, `Message`, `View`, `State`) VALUES
(1, 'Fraud Image', 'putthiwat.kmutt@gmail.com', 'The quality of \"English Book 3\" that I receive from the Donor is worsened than what the images represent.', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `WebRequest`
--

CREATE TABLE `WebRequest` (
  `Request_ID` int(255) NOT NULL,
  `Item_ID` int(255) DEFAULT NULL,
  `Student_ID` int(255) DEFAULT NULL,
  `Company_ID` int(255) DEFAULT NULL,
  `Sponsor_ID` int(255) DEFAULT NULL,
  `Accept` tinyint(1) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `WebRequest`
--

INSERT INTO `WebRequest` (`Request_ID`, `Item_ID`, `Student_ID`, `Company_ID`, `Sponsor_ID`, `Accept`, `State`) VALUES
(1, 1, 1, 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `WebTrade`
--

CREATE TABLE `WebTrade` (
  `Request_ID` int(255) NOT NULL,
  `Reward_ID` int(255) DEFAULT NULL,
  `Donor_ID` int(255) DEFAULT NULL,
  `Company_ID` int(255) DEFAULT NULL,
  `Sponsor_ID` int(255) DEFAULT NULL,
  `Accept` tinyint(1) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `WebTrade`
--

INSERT INTO `WebTrade` (`Request_ID`, `Reward_ID`, `Donor_ID`, `Company_ID`, `Sponsor_ID`, `Accept`, `State`) VALUES
(1, 1, 1, 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `WebWishlist`
--

CREATE TABLE `WebWishlist` (
  `Wish_ID` int(255) NOT NULL,
  `Item_ID` int(255) DEFAULT NULL,
  `Student_ID` int(255) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `WebWishlist`
--

INSERT INTO `WebWishlist` (`Wish_ID`, `Item_ID`, `Student_ID`, `State`) VALUES
(1, 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AllEmail`
--
ALTER TABLE `AllEmail`
  ADD PRIMARY KEY (`Email_ID`);

--
-- Indexes for table `ItemDonate`
--
ALTER TABLE `ItemDonate`
  ADD PRIMARY KEY (`Item_ID`),
  ADD KEY `Donor_ID` (`Donor_ID`),
  ADD KEY `itemdonate_ibfk_2` (`Type_ID`),
  ADD KEY `itemdonate_ibfk_3` (`School_ID`);

--
-- Indexes for table `ItemReward`
--
ALTER TABLE `ItemReward`
  ADD PRIMARY KEY (`Reward_ID`),
  ADD KEY `Sponsor_ID` (`Sponsor_ID`);

--
-- Indexes for table `ListCompany`
--
ALTER TABLE `ListCompany`
  ADD PRIMARY KEY (`Company_ID`);

--
-- Indexes for table `ListItem`
--
ALTER TABLE `ListItem`
  ADD PRIMARY KEY (`Type_ID`);

--
-- Indexes for table `ListSchool`
--
ALTER TABLE `ListSchool`
  ADD PRIMARY KEY (`School_ID`);

--
-- Indexes for table `UserAdmin`
--
ALTER TABLE `UserAdmin`
  ADD PRIMARY KEY (`Admin_ID`);

--
-- Indexes for table `UserDonor`
--
ALTER TABLE `UserDonor`
  ADD PRIMARY KEY (`Donor_ID`);

--
-- Indexes for table `UserSponsor`
--
ALTER TABLE `UserSponsor`
  ADD PRIMARY KEY (`Sponsor_ID`),
  ADD KEY `usersponsor_ibfk_1` (`Company_ID`);

--
-- Indexes for table `UserStudent`
--
ALTER TABLE `UserStudent`
  ADD PRIMARY KEY (`Student_ID`),
  ADD KEY `userstudent_ibfk_1` (`School_ID`);

--
-- Indexes for table `WebNotify`
--
ALTER TABLE `WebNotify`
  ADD PRIMARY KEY (`Notify_ID`),
  ADD KEY `Student_ID` (`Student_ID`),
  ADD KEY `webnotify_ibfk_1` (`School_ID`),
  ADD KEY `webnotify_ibfk_2` (`Type_ID`);

--
-- Indexes for table `WebReport`
--
ALTER TABLE `WebReport`
  ADD PRIMARY KEY (`Report_ID`);

--
-- Indexes for table `WebRequest`
--
ALTER TABLE `WebRequest`
  ADD PRIMARY KEY (`Request_ID`),
  ADD KEY `Student_ID` (`Student_ID`),
  ADD KEY `Company_ID` (`Company_ID`),
  ADD KEY `Sponsor_ID` (`Sponsor_ID`),
  ADD KEY `webrequest_ibfk_1` (`Item_ID`);

--
-- Indexes for table `WebTrade`
--
ALTER TABLE `WebTrade`
  ADD PRIMARY KEY (`Request_ID`),
  ADD KEY `Student_ID` (`Donor_ID`),
  ADD KEY `Company_ID` (`Company_ID`),
  ADD KEY `Sponsor_ID` (`Sponsor_ID`),
  ADD KEY `webrequest_ibfk_1` (`Reward_ID`);

--
-- Indexes for table `WebWishlist`
--
ALTER TABLE `WebWishlist`
  ADD PRIMARY KEY (`Wish_ID`),
  ADD KEY `Item_ID` (`Item_ID`),
  ADD KEY `Student_ID` (`Student_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AllEmail`
--
ALTER TABLE `AllEmail`
  MODIFY `Email_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ItemDonate`
--
ALTER TABLE `ItemDonate`
  MODIFY `Item_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ItemReward`
--
ALTER TABLE `ItemReward`
  MODIFY `Reward_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ListCompany`
--
ALTER TABLE `ListCompany`
  MODIFY `Company_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ListItem`
--
ALTER TABLE `ListItem`
  MODIFY `Type_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ListSchool`
--
ALTER TABLE `ListSchool`
  MODIFY `School_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `UserAdmin`
--
ALTER TABLE `UserAdmin`
  MODIFY `Admin_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `UserDonor`
--
ALTER TABLE `UserDonor`
  MODIFY `Donor_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `UserSponsor`
--
ALTER TABLE `UserSponsor`
  MODIFY `Sponsor_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `UserStudent`
--
ALTER TABLE `UserStudent`
  MODIFY `Student_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WebNotify`
--
ALTER TABLE `WebNotify`
  MODIFY `Notify_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WebReport`
--
ALTER TABLE `WebReport`
  MODIFY `Report_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WebRequest`
--
ALTER TABLE `WebRequest`
  MODIFY `Request_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WebTrade`
--
ALTER TABLE `WebTrade`
  MODIFY `Request_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `WebWishlist`
--
ALTER TABLE `WebWishlist`
  MODIFY `Wish_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ItemDonate`
--
ALTER TABLE `ItemDonate`
  ADD CONSTRAINT `itemdonate_ibfk_1` FOREIGN KEY (`Donor_ID`) REFERENCES `UserDonor` (`Donor_ID`),
  ADD CONSTRAINT `itemdonate_ibfk_2` FOREIGN KEY (`Type_ID`) REFERENCES `ListItem` (`Type_ID`),
  ADD CONSTRAINT `itemdonate_ibfk_3` FOREIGN KEY (`School_ID`) REFERENCES `ListSchool` (`School_ID`);

--
-- Constraints for table `ItemReward`
--
ALTER TABLE `ItemReward`
  ADD CONSTRAINT `itemreward_ibfk_1` FOREIGN KEY (`Sponsor_ID`) REFERENCES `UserSponsor` (`Sponsor_ID`);

--
-- Constraints for table `UserSponsor`
--
ALTER TABLE `UserSponsor`
  ADD CONSTRAINT `usersponsor_ibfk_1` FOREIGN KEY (`Company_ID`) REFERENCES `ListCompany` (`Company_ID`);

--
-- Constraints for table `UserStudent`
--
ALTER TABLE `UserStudent`
  ADD CONSTRAINT `userstudent_ibfk_1` FOREIGN KEY (`School_ID`) REFERENCES `ListSchool` (`School_ID`);

--
-- Constraints for table `WebNotify`
--
ALTER TABLE `WebNotify`
  ADD CONSTRAINT `webnotify_ibfk_1` FOREIGN KEY (`School_ID`) REFERENCES `ListSchool` (`School_ID`),
  ADD CONSTRAINT `webnotify_ibfk_2` FOREIGN KEY (`Type_ID`) REFERENCES `ListItem` (`Type_ID`),
  ADD CONSTRAINT `webnotify_ibfk_3` FOREIGN KEY (`Student_ID`) REFERENCES `UserStudent` (`Student_ID`);

--
-- Constraints for table `WebRequest`
--
ALTER TABLE `WebRequest`
  ADD CONSTRAINT `webrequest_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `ItemDonate` (`Item_ID`),
  ADD CONSTRAINT `webrequest_ibfk_2` FOREIGN KEY (`Student_ID`) REFERENCES `UserStudent` (`Student_ID`),
  ADD CONSTRAINT `webrequest_ibfk_3` FOREIGN KEY (`Company_ID`) REFERENCES `ListCompany` (`Company_ID`),
  ADD CONSTRAINT `webrequest_ibfk_4` FOREIGN KEY (`Sponsor_ID`) REFERENCES `UserSponsor` (`Sponsor_ID`);

--
-- Constraints for table `WebTrade`
--
ALTER TABLE `WebTrade`
  ADD CONSTRAINT `webtrade_ibfk_1` FOREIGN KEY (`Reward_ID`) REFERENCES `ItemReward` (`Reward_ID`),
  ADD CONSTRAINT `webtrade_ibfk_2` FOREIGN KEY (`Donor_ID`) REFERENCES `UserDonor` (`Donor_ID`),
  ADD CONSTRAINT `webtrade_ibfk_3` FOREIGN KEY (`Company_ID`) REFERENCES `ListCompany` (`Company_ID`),
  ADD CONSTRAINT `webtrade_ibfk_4` FOREIGN KEY (`Sponsor_ID`) REFERENCES `UserSponsor` (`Sponsor_ID`);

--
-- Constraints for table `WebWishlist`
--
ALTER TABLE `WebWishlist`
  ADD CONSTRAINT `webwishlist_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `ItemDonate` (`Item_ID`),
  ADD CONSTRAINT `webwishlist_ibfk_2` FOREIGN KEY (`Student_ID`) REFERENCES `UserStudent` (`Student_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
