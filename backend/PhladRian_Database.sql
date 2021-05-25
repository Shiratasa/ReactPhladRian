-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 06:06 AM
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
  `Obj` varchar(64) DEFAULT NULL,
  `Pic1` varbinary(8000) DEFAULT NULL,
  `Pic2` varbinary(8000) DEFAULT NULL,
  `Pic3` varbinary(8000) DEFAULT NULL,
  `Pic4` varbinary(8000) DEFAULT NULL,
  `Type_ID` int(255) DEFAULT NULL,
  `School_ID` int(255) DEFAULT NULL,
  `Quantity` int(255) DEFAULT NULL,
  `Quality` int(5) DEFAULT NULL,
  `Detail` varchar(999) DEFAULT NULL,
  `Fragile` tinyint(1) DEFAULT NULL,
  `Warning` int(255) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ItemDonate`
--

INSERT INTO `ItemDonate` (`Item_ID`, `Donor_ID`, `Obj`, `Pic1`, `Pic2`, `Pic3`, `Pic4`, `Type_ID`, `School_ID`, `Quantity`, `Quality`, `Detail`, `Fragile`, `Warning`, `State`) VALUES
(1, 1, 'O-NET EXAMINATION BOOK', 0x433a5c66616b65706174685c70726f64756374362e6a7067, 0x433a5c66616b65706174685c312e6a7067, 0x433a5c66616b65706174685c322e6a7067, 0x433a5c66616b65706174685c332e6a7067, 2, 3, 50, 4, '5 in 1 O-NET exam preparation, P.6 complete. This is a book that I read before the exam. I must say that this book is very good as it summarizes 5 main subjects into one book. And it also has the exercises at the end of each chapter and the pass O-net exam of the previous years for you to try. If you still don\'t understand why each of these questions answered, it has complete detailed solutions for children to understand as well. In addition to the many exams for children to do, it also has content to study as well.', 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ItemReward`
--

CREATE TABLE `ItemReward` (
  `Reward_ID` int(255) NOT NULL,
  `Sponsor_ID` int(255) DEFAULT NULL,
  `Obj` varchar(64) DEFAULT NULL,
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

INSERT INTO `ItemReward` (`Reward_ID`, `Sponsor_ID`, `Obj`, `Pic1`, `Pic2`, `Pic3`, `Pic4`, `Pic5`, `Pic6`, `Quantity`, `Price`, `Detail`, `Warning`, `State`) VALUES
(1, 1, 'Teddy Bear', 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 0x5b76616c75652d365d, 999, 25, 'The imported teddy bear product from Japan. Its body is squishy and has the lovely design.', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ListCompany`
--

CREATE TABLE `ListCompany` (
  `Company_ID` int(255) NOT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListCompany`
--

INSERT INTO `ListCompany` (`Company_ID`, `Name`, `State`) VALUES
(1, 'Grab', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ListItem`
--

CREATE TABLE `ListItem` (
  `Type_ID` int(255) NOT NULL,
  `Category` varchar(64) DEFAULT NULL,
  `Point` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListItem`
--

INSERT INTO `ListItem` (`Type_ID`, `Category`, `Point`) VALUES
(1, 'Stationery', 15),
(2, 'Book', 20),
(3, 'Uniform', 25),
(4, 'Bag', 25),
(5, 'Device', 30),
(6, 'Others', 20);

-- --------------------------------------------------------

--
-- Table structure for table `ListSchool`
--

CREATE TABLE `ListSchool` (
  `School_ID` int(255) NOT NULL,
  `Name` varchar(64) DEFAULT NULL,
  `State` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ListSchool`
--

INSERT INTO `ListSchool` (`School_ID`, `Name`, `State`) VALUES
(1, 'Debsirin', 1),
(2, 'Suankularb', 1),
(3, 'Assumption', 1),
(4, 'Bangkok Christian', 1),
(5, 'Saint Gabriel', 1),
(6, 'Saint Dominic', 1),
(7, 'Vajiravudh', 1),
(8, 'Wat Suthiwararam', 1),
(9, 'Traimit', 1),
(10, 'Wattana', 1),
(11, 'Saint Joseph', 1),
(12, 'Materdei', 1),
(13, 'Satriwitthaya', 1),
(14, 'Suksanari', 1),
(15, 'Wat Mahapruettaram', 1),
(16, 'Sainampeung', 1),
(17, 'Saipanya', 1),
(18, 'Phraharuthai', 1),
(19, 'Army Reserve Command', 1),
(20, 'Others', 1);

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
  `Card_Image` varbinary(8000) DEFAULT NULL,
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

INSERT INTO `UserStudent` (`Student_ID`, `School_ID`, `Username`, `Student_Card`, `Card_Image`, `Grade`, `Email`, `Phone`, `Password`, `Address`, `State`) VALUES
(1, 1, 'Putthiwat Chalermvongsavej', '0010080243735', 0xc3bfc398c3bfc3a20bc3b84943435f50524f46494c4500010100000bc3a800000000020000006d6e74725247422058595a2007c3990003001b00150024001f61637370000000000000000000000000000000000000000100000000000000000000c3b6c396000100000000c3932d0000000029c3b83dc39ec2afc3b255c2ae7842c3bac3a4c38ac283390d00000000000000000000000000000000000000000000000000000000000000106465736300000144000000796258595a000001c3800000001462545243000001c3940000080c646d6464000009c3a0000000c2886758595a00000a680000001467545243000001c3940000080c6c756d6900000a7c000000146d65617300000ac29000000024626b707400000ac2b4000000147258595a00000ac3880000001472545243000001c3940000080c7465636800000ac39c0000000c7675656400000ac3a8000000c2877774707400000b70000000146370727400000bc284000000376368616400000bc2bc0000002c64657363000000000000001f735247422049454336313936362d322d3120626c61636b207363616c65640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000058595a2000000000000024c2a000000fc2840000c2b6c38f63757276000000000000040000000005000a000f00140019001e00230028002d00320037003b00400045004a004f00540059005e00630068006d00720077007c00c28100c28600c28b00c29000c29500c29a00c29f00c2a400c2a900c2ae00c2b200c2b700c2bc00c38100c38600c38b00c39000c39500c39b00c3a000c3a500c3ab00c3b000c3b600c3bb01010107010d01130119011f0125012b01320138013e0145014c0152015901600167016e0175017c01c28301c28b01c29201c29a01c2a101c2a901c2b101c2b901c38101c38901c39101c39901c3a101c3a901c3b201c3ba0203020c0214021d0226022f02380241024b0254025d02670271027a02c28402c28e02c29802c2a202c2ac02c2b602c38102c38b02c39502c3a002c3ab02c3b50300030b03160321032d03380343034f035a03660372037e03c28a03c29603c2a203c2ae03c2ba03c38703c39303c3a003c3ac03c3b9040604130420042d043b0448045504630471047e04c28c04c29a04c2a804c2b604c38404c39304c3a104c3b004c3be050d051c052b053a054905580567057705c28605c29605c2a605c2b505c38505c39505c3a505c3b6060606160627063706480659066a067b06c28c06c29d06c2af06c38006c39106c3a306c3b507070719072b073d074f0761077407c28607c29907c2ac07c2bf07c39207c3a507c3b8080b081f08320846085a086e08c28208c29608c2aa08c2be08c39208c3a708c3bb09100925093a094f0964097909c28f09c2a409c2ba09c38f09c3a509c3bb0a110a270a3d0a540a6a0ac2810ac2980ac2ae0ac3850ac39c0ac3b30b0b0b220b390b510b690bc2800bc2980bc2b00bc3880bc3a10bc3b90c120c2a0c430c5c0c750cc28e0cc2a70cc3800cc3990cc3b30d0d0d260d400d5a0d740dc28e0dc2a90dc3830dc39e0dc3b80e130e2e0e490e640e7f0ec29b0ec2b60ec3920ec3ae0f090f250f410f5e0f7a0fc2960fc2b30fc38f0fc3ac1009102610431061107e10c29b10c2b910c39710c3b511131131114f116d11c28c11c2aa11c38911c3a8120712261245126412c28412c2a312c38312c3a3130313231343136313c28313c2a413c38513c3a5140614271449146a14c28b14c2ad14c38e14c3b0151215341556157815c29b15c2bd15c3a0160316261649166c16c28f16c2b216c39616c3ba171d1741176517c28917c2ae17c39217c3b7181b1840186518c28a18c2af18c39518c3ba19201945196b19c29119c2b719c39d1a041a2a1a511a771ac29e1ac3851ac3ac1b141b3b1b631bc28a1bc2b21bc39a1c021c2a1c521c7b1cc2a31cc38c1cc3b51d1e1d471d701dc2991dc3831dc3ac1e161e401e6a1ec2941ec2be1ec3a91f131f3e1f691fc2941fc2bf1fc3aa20152041206c20c29820c38420c3b0211c2148217521c2a121c38e21c3bb2227225522c28222c2af22c39d230a2338236623c29423c38223c3b0241f244d247c24c2ab24c39a25092538256825c29725c38725c3b72627265726c28726c2b726c3a827182749277a27c2ab27c39c280d283f287128c2a228c39429062938296b29c29d29c3902a022a352a682ac29b2ac38f2b022b362b692bc29d2bc3912c052c392c6e2cc2a22cc3972d0c2d412d762dc2ab2dc3a12e162e4c2ec2822ec2b72ec3ae2f242f5a2fc2912fc3872fc3be3035306c30c2a430c39b3112314a31c28231c2ba31c3b2322a326332c29b32c394330d3346337f33c2b833c3b1342b346534c29e34c3983513354d35c28735c38235c3bd3637367236c2ae36c3a93724376037c29c37c3973814385038c28c38c38839053942397f39c2bc39c3b93a363a743ac2b23ac3af3b2d3b6b3bc2aa3bc3a83c273c653cc2a43cc3a33d223d613dc2a13dc3a03e203e603ec2a03ec3a03f213f613fc2a23fc3a24023406440c2a640c3a74129416a41c2ac41c3ae4230427242c2b542c3b7433a437d43c3804403444744c28a44c38e4512455545c29a45c39e4622466746c2ab46c3b04735477b47c3804805484b48c29148c397491d496349c2a949c3b04a374a7d4ac3844b0c4b534bc29a4bc3a24c2a4c724cc2ba4d024d4a4dc2934dc39c4e254e6e4ec2b74f004f494fc2934fc39d5027507150c2bb5106515051c29b51c3a65231527c52c3875313535f53c2aa53c3b6544254c28f54c39b5528557555c382560f565c56c2a956c3b7574457c29257c3a0582f587d58c38b591a596959c2b85a075a565ac2a65ac3b55b455bc2955bc3a55c355cc2865cc3965d275d785dc3895e1a5e6c5ec2bd5f0f5f615fc2b36005605760c2aa60c3bc614f61c2a261c3b5624962c29c62c3b0634363c29763c3ab644064c29464c3a9653d65c29265c3a7663d66c29266c3a8673d67c29367c3a9683f68c29668c3ac694369c29a69c3b16a486ac29f6ac3b76b4f6bc2a76bc3bf6c576cc2af6d086d606dc2b96e126e6b6ec3846f1e6f786fc391702b70c28670c3a0713a71c29571c3b0724b72c2a67301735d73c2b87414747074c38c752875c28575c3a1763e76c29b76c3b8775677c2b37811786e78c38c792a79c28979c3a77a467ac2a57b047b637bc3827c217cc2817cc3a17d417dc2a17e017e627ec3827f237fc2847fc3a5c28047c280c2a8c2810ac2816bc281c38dc28230c282c292c282c3b4c28357c283c2bac2841dc284c280c284c3a3c28547c285c2abc2860ec28672c286c397c2873bc287c29fc28804c28869c288c38ec28933c289c299c289c3bec28a64c28ac38ac28b30c28bc296c28bc3bcc28c63c28cc38ac28d31c28dc298c28dc3bfc28e66c28ec38ec28f36c28fc29ec29006c2906ec290c396c2913fc291c2a8c29211c2927ac292c3a3c2934dc293c2b6c29420c294c28ac294c3b4c2955fc295c389c29634c296c29fc2970ac29775c297c3a0c2984cc298c2b8c29924c299c290c299c3bcc29a68c29ac395c29b42c29bc2afc29c1cc29cc289c29cc3b7c29d64c29dc392c29e40c29ec2aec29f1dc29fc28bc29fc3bac2a069c2a0c398c2a147c2a1c2b6c2a226c2a2c296c2a306c2a376c2a3c3a6c2a456c2a4c387c2a538c2a5c2a9c2a61ac2a6c28bc2a6c3bdc2a76ec2a7c3a0c2a852c2a8c384c2a937c2a9c2a9c2aa1cc2aac28fc2ab02c2ab75c2abc3a9c2ac5cc2acc390c2ad44c2adc2b8c2ae2dc2aec2a1c2af16c2afc28bc2b000c2b075c2b0c3aac2b160c2b1c396c2b24bc2b2c382c2b338c2b3c2aec2b425c2b4c29cc2b513c2b5c28ac2b601c2b679c2b6c3b0c2b768c2b7c3a0c2b859c2b8c391c2b94ac2b9c382c2ba3bc2bac2b5c2bb2ec2bbc2a7c2bc21c2bcc29bc2bd15c2bdc28fc2be0ac2bec284c2bec3bfc2bf7ac2bfc3b5c38070c380c3acc38167c381c3a3c3825fc382c39bc38358c383c394c38451c384c38ec3854bc385c388c38646c386c383c38741c387c2bfc3883dc388c2bcc3893ac389c2b9c38a38c38ac2b7c38b36c38bc2b6c38c35c38cc2b5c38d35c38dc2b5c38e36c38ec2b6c38f37c38fc2b8c39039c390c2bac3913cc391c2bec3923fc392c381c39344c393c386c39449c394c38bc3954ec395c391c39655c396c398c3975cc397c3a0c39864c398c3a8c3996cc399c3b1c39a76c39ac3bbc39bc280c39c05c39cc28ac39d10c39dc296c39e1cc39ec2a2c39f29c39fc2afc3a036c3a0c2bdc3a144c3a1c38cc3a253c3a2c39bc3a363c3a3c3abc3a473c3a4c3bcc3a5c284c3a60dc3a6c296c3a71fc3a7c2a9c3a832c3a8c2bcc3a946c3a9c390c3aa5bc3aac3a5c3ab70c3abc3bbc3acc286c3ad11c3adc29cc3ae28c3aec2b4c3af40c3afc38cc3b058c3b0c3a5c3b172c3b1c3bfc3b2c28cc3b319c3b3c2a7c3b434c3b4c382c3b550c3b5c39ec3b66dc3b6c3bbc3b7c28ac3b819c3b8c2a8c3b938c3b9c387c3ba57c3bac3a7c3bb77c3bc07c3bcc298c3bd29c3bdc2bac3be4bc3bec39cc3bf6dc3bfc3bf64657363000000000000002e4945432036313936362d322d312044656661756c742052474220436f6c6f7572205370616365202d20735247420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000058595a2000000000000062c2990000c2b7c285000018c39a58595a20000000000000000000500000000000006d656173000000000000000100000000000000000000000000000000000000000000000258595a20000000000000031600000333000002c2a458595a200000000000006fc2a2000038c3b5000003c29073696720000000004352542064657363000000000000002d5265666572656e63652056696577696e6720436f6e646974696f6e20696e204945432036313936362d322d31000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000058595a20000000000000c3b6c396000100000000c3932d7465787400000000436f7079726967687420496e7465726e6174696f6e616c20436f6c6f7220436f6e736f727469756d2c20323030390000736633320000000000010c44000005c39fc3bfc3bfc3b326000007c2940000c3bdc28fc3bfc3bfc3bbc2a1c3bfc3bfc3bdc2a2000003c39b0000c38075c3bfc3a000104a46494600010100000100010000c3bfc39b004300080808080908090a0a090d0e0c0e0d1311101011131c14161416141c2b1b1f1b1b1f1b2b262e2523252e2644352f2f35444e423e424e5f55555f777177c29cc29cc391c3bfc39b004301080808080908090a0a090d0e0c0e0d1311101011131c14161416141c2b1b1f1b1b1f1b2b262e2523252e2644352f2f35444e423e424e5f55555f777177c29cc29cc391c3bfc382001108050e07c39303012200021101031101c3bfc384001a000002030101000000000000000000000000010203040506c3bfc38400190101010101010100000000000000000000000102030405c3bfc39a000c03010002100310000001c3b1c2a06b20c2a429392c5dc2bac3b0c3a7c2bec38dc298c39705c3b714714ec3a4c3a5c3a01ec288c28f38c3bd1a3cc3abc3b432c28f38c3bd1079c395c3a943c38dc2bf48c2a3c38dc29ec290c2af387a3679c387c3a8c3a51e65c3ba40c3b36bc393c291c3a64f4c1e6a5ec289c2afc29c3d3079c283c393c291c3a61fc2a60f367a50c3b347c2a571c3a6c2a3c3a9c3a15e6cc3b4c2acc3b367c2a367c29ac297c2a20f38c2bd3567c29e5ec28c4f38c3bd1a3cc3b2c3b46e3cc39bc3b441c3a757c2a30f391f4ac2abc38dc29ec29227c29e5ec29a07c29d5ec291c29e6cc3b46e5f367a4479c383c391c2b3c38dc29ec28d1e725ec2844f34c2bd344f367a391e64c3b4c2b1c2af38c2bd24c28f34c2bd1879c385c3a911c3a74f44c393c38dc29ec28c5f367a58c399c3a757c2a34bc3a74f441e7a3ec2891e78c3b4323cc3a2c3b42579c3a5c3a8c291c3a7c397c2a075c3a7c28f4113c280772c4e02c3b435c29c23c2b53d380fc2b75dc29cc283c2b169c3835dc3851c65c39c52c3b0c38ec3ac6bc288755ec2a72576c3a271c38ec38c4e41c3980e33c3acc384c3a3c2bec2ba39275d1cc293c2aec28e49c394472cc3ab072975c391c38a5d5672c2975a272cc3aa072cc3a9c2aac3a6c29d10c3a71d16734ec292c28e72c3a90735c3b404c3a7c2aec2815cc3b37a303dc381c284c39c184dc2a1c284c39ac2ab22c396c28cc2a6c2a2c2b2c29a51c298c392c28a0d014ac39019c396c28815170949632a2c7552c2b515c2b6c3881308c2924224c28432c292c29045c2b409c2b10c10c38223043001c28818c29800c390200000000002c38b616dc2bb25c3897ec2a9c3a2c3a7c39315c296c287c298c3a7c2abc3a348c2ba2dc384c3a3c2ad6f32c39e6ec284c2b2c3a9c3a758384304304321360818c28609c28403043049c28a0c130910c3804cc28130430432c292c29210c3812904582a24c2a10c10c3902600310c12602608000213010c10c3884340000310c3900310c381124263223210c3810c126521c2b10c10c3810c12c29841c388c2a8c386c390c2a8c2b0c2aac295c38ac2aa2d0a4b44c2a5c39ac2adc2ae37c296673415417a292e0a1dc3814178505c1417c28505c3814c740525c3a4505e143bc282c285c2a033c29a0333c390c28cc3a6c284512bc288c2a5c39c4b4173c28a16c280c2a23a4332c39459c290c396c28cc2a6c2a0c3866c0c70c39cc3ab047a0573c39745573974c28ac3a61d2139c2a7485e6ac3a909c38a3ac2a572c39759471d760b38c3abc2b057163dc2a8c3a9c3863b4ac2b8c2876838c2876c386bc2b8570d771570c2976d59c3843b61c3845dc380c3a1c29dc2b2c2b8c291c3aec384c3a21dc2a2c38e2ac3acc295c3855dc2a55c75c39913c28f1ec2bd367356c3aac3b4c386590dc38402c28020012d15c3b425c391c395c2aac39f3f4c51c2951ac2b2c2aec388591bc2a9c2b0c39318c383c29ac39ac3aec2b8c3a5c2abc2a1c2a5c29d1e65c2b8c2bdc297c2975f0ac2a4c29c20200621c282600040000256c29826000400200001000a00000031002600c29a04c395c2800305c3903ac38ec29264c2973ac28472c2ac402609c385c280c2a5221a51c2a621c290c28004c3804dc390c2a51ec2b1c2a72b13783a4dc3b0c28dc299c2b061c3a6c3900421c2a00043006526026009c282600d301a13004d0260c2800028000000000018c2880a40c29463c2a448c2b224c2822352c280c38448c2b22a68c288c3964010c286c284c3815a08000060000009c294c2800001340050395912c38ac3bac38423c29d00c38d4c00010dc2915208c28c22c382c380010d28c2a408c2921120c288c38ac288c39a46336b5b6222411241026ac2a04c204c5a61c2a559c292c29dc3abc2ae78c2b8c3bd062f4638c3b5c3acc38bc396440a0626c39ec3860ec3bf001dc386c2bbc2a3c38f5cc39ac3b665c39a7224c2b8c3b4c2a24d19c3b6c38b0cc2bb31c39b1563c399c2876d3663c291c394c39bc388c3a871c2ba01c3b3c2a86a06c281c28009c2a03356c39ec3a232c2992bc29d0ac2aec3a3c3adc39f5dc38239c3b06ac2aa6ec3b6155d32c2804008005018c2800006262001000140c396c3a55cc3bac2a8c3b7c3b2c2b6c2aec2b435c29cc29dc28f37c2ba5ec2aac29e7f075bc28847c29dc2b235c391573cc3b6c395c3b3c28cc2b144c38913050000002551c2a9707dc2bcc2ba74c3a6c399c3a8c3846c551d2e0cc2b327c2a1c399c28f67c29fc2ac187cc3bec280020001c28000000009c28000c3932869c280c3a203421811c29210c390031014000000000c401102c2a4c39f17c397c28ec28d5cc29bc3bbc3b3c3a85dc38b0ec38cc2b9c2bd0c6e497124c3a9c383c295775cc3b42ec3a4c38d7b0b1ec38e1ac288c38f1ec390c38840c384c2a4c2a54340c3930028000100000021c398592a7d59c2b2c2be6e1ec3b8c3aa65c38fc391344e51c3b1c3b41072c39000c381c28860c28010c39029244c140006c281c280c2861118c289c282c2882a2c4369c28031466912c292000132c292c291c2a429c3910dc38e473fc2bbc38dc3b573c3a742c3ba7ac38405c29ec283c2b5c389c3a9c3b9c3bac3852866c3a7c2a8c2854a74c3966f556bc38cc28dc2935cc399c2b0c3acc389c390464b676d7a623a6ec2973b7cc293c3a346c288010cc284c2965168c389c38cc3ad723ac3bb37c3abc3a4c3aec29cc3b453c29b4e73c389c397c29b475f4f48c385671f2c70c39d0ec29dc3ba1a6ac2b7c28fc29822c2a626c3a328400000c380400d000009c2a002c386c3a32ec2b3c38dc383c2bfc38dc3b6c3b2c397c2b7c38c6ac3936e1ec3864977515d7e6dc39d525cc2b4c3a0c39ec2966ac2aec3be64c383c29d62720008686005c291c297c2a271c2b277c297c2abc29f19c3b5c39572c2a5c391c2a373c293c29fc2adc28ec3a3c2adc2b716c38f3f5407c38ec3aac281c280c29800000000c39030000002c381c2a92a1a103126c384c29a04030013400ec290c3810cc284490268c28dc390c2977cc3b279c2bdc2997b79c3b36dc3970d4ac2a17575c28bc2a5c38e12c3acc3bd5b4e75c2ba232d54c3a9c2a2c2a9c3aac3b2361d685b5fc283c2aa19c382c2a1c2a000434a010014000800000115c290c29ec387c29fc3adc3b2c2bec28f1a55c3b1c3967a5707c283c2b8c29c795064c2a021c283c280004c12600140026d000000c3930430c28ac29210c3911029c2b8c38818403409c2aa134820c2a00005c2a578c3b7c393c39b3e7f2f4317c2abc2956336c3b41762c2b3c28f4d17c3a1c2bf3630c294c3a2c38c5d6a32c381c2b33cc2ab76c28e56c2bc1e2ec2960a7762c3a8c298c3afc3971cc39b6c52c3a54021c28804c385c3a7c382c3be4f4f5f7960c399392a326ac3975cc29bc2b268c2bbc38dc2bf1ec399c28c17c39775c3964d39c3b5196ec2a6c3b5c3976f277f3e13c3891ac2aec2b7c3abc38bc2a7c29f16067000000021c2800000c28001005a0a3576c295713bc3be7bc39bc387c390c3a4c397c29bc296c3aac29ac2b71a26c2b3c3af3b25c38ec2b74ec2995ec28f3ec2ab11c3a6c39cc280c2b1c2bc597d38c3ac2e7f4a584a272b27c38ac3a87a3334c3971d03c2a7c2a4c2b8c3a7c397c39b3d4ac3b26bc3a926590e1ac283c2955e6d58613ac3a772c28dc298c3922bc38fc2a9c2b14d66c2a2c29a75c29d642dc3a7c2a8c2a670c2ae451dc3a5c3aec2bbc2b6c2ac75656955c3b5584fc29dc2894c7ac3a6c3b43e7624c2a9c392c39335c2bbc2932472c2b1c293c38fc2b972c2aec3b21214c2ad46c39d202825c2b1c2b2c2b94148414f5cc39d1a5f4866c39fc386c3abc28ec385c2bcc2aec2ae775b23c3a6c392c28677c39e4dc2bd1d7365733cc2bbc28053c3896919c3a6c2a039544ec2bec291c28a54c295c299c38b0ac3adc2a8c2b278c2b070c28ec3b360c2a5c28ac2a5195ac2b2c3acc2a7c399c38f16c2b72dc386c2a4c2be77540f2404c2a200681800c298c28860c280c2a1c2a062062069c2800026000ac2a33809354dc385c383060002c294500548c292c2a4340052c28b3538c39cc39ec38723c397c28ac280c3adc29ec2bcc3abc2b31b5b325bc28b7dc3b46cc3a5613c76c3846ac39fc2834c6d2ec2936c72c399c29a69c2a251c397c2b72ec2bf3d00c3880004c2890858c3a2c2bac2adc3b7c3a76fc29e2ec29dc3b566c39b4cc38dc399c3aec28cc28ec391c2b3c29ec392c3831dc2924d46c2ad1054c3acc3882dc39548c39d2a2cc3a1c3a5c299094cc2b0000000044313c2a400c2a9c2b72ec2a5c392c384c3b4c39552c2bf4ac2bcc3b7c2a2c3b3c2bec3ae1ec282c28bc3a9c38744c3adc3a458c2b653c397c3abc38f265ec2bac2bac3b3c3bdc2bc59733d1517c397c3a4c3ad261879c28ec2864b3dc39e7cc3bec287c38d77c2b3c2bdc395c38a1e6dc3b97f45c3a73d0fc2a71b40c3b1c3b5c2abc281c2ab27c2afc295c3b6c3b527c39270c2a1c39dc3a5c2a6c3bdc29e6bc3916375c3b9c3bdc39c7674c39f4ec28bc297c39ec3b37ec2933bc3a5c3b1c3bac3bc64c3b5c289c39575c3a6c3b664c3a9c39c63c3b45e4bc394c3a76c0fc297c3967e77c390c3b9c39f6f3ec28f53c28fc396c3a8387dc2be161676c3b85dc39d2146c28c1cc2af26c3bac3aec3b572c2bbc2afc3a67d2e75c293c2852bc3a91dc29f3d67c2a2c391c38dc3a9c3a77cc28c53c2b758c2abc2abc385c39f6f5bc38fc3b6c2bcc2b474c2bbc2be63c390c29cc2bac29d49c3a8c2abc2b2c2bf2f59536fc299c3a9c29bc3a2c3ba5dc3b1c38e5bc3b9c3a5c2bcc3b734c3aec3adc28cc3b3c2ba3833123675c3a5c2b9c387c393673cc3aec399c38dc393c29bc386c2b2c2ad762ec2b7c29bc3b43cc3acc2933c1dc29f0fc2b5c380c3b5c3b3c3aac3afc3a7743a39c3bcc2bd06c3b06fc3a46dc28ec2af3f5fc29ac296c3bbc3acc2b752c38dc2bc3ec396356d5679c3acc39b6074c2bb6316c28bc2b246c39bc2b9c29d1e3d18c38f0ec39010212b2213130010001329000340086274c384c3a00004c38138c28a2d2b4e35314a00001209c294c280c2a100015153c286c29cc3ae475bc293c3abc3a7401dc2b3c399c2bd59c38bc2a65b2bc294c29a37c3b3c3b7c3b2c2b1c383c394c38e45c38a673ac2adc3b1c39bc29f29c2ad27c2a72ec3ae76c39dc295c399c386c2b030002bc383c391c383c2bec2b4c3adc3a42ec29ec28ec3972ec38dc2933875c29406c2b819c3842fc292c291312371c29a571bc392c3a6c2b275374cc39d7770573b6cc2866ac3a66dc393c29b6cc2, 'M6', 'putthiwat.kmutt@gmail.com', '0612562121', 'finalpro', '134/58, 30 Suk Sawat Rd, Bang Pakok, Rat Burana, Bangkok 10140', 1);

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
  MODIFY `Type_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `ListSchool`
--
ALTER TABLE `ListSchool`
  MODIFY `School_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
