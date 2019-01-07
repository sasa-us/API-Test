-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 28, 2018 at 01:30 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api-test-v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `updated-inventory`
--

DROP TABLE IF EXISTS `updated-inventory`;
CREATE TABLE IF NOT EXISTS `updated-inventory` (
  `internal_id` int(11) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `chino_ca_warehouse` varchar(255) DEFAULT NULL,
  `summerville_sc_warehouse` varchar(255) DEFAULT NULL,
  `wilmer_tx_warehouse` varchar(255) DEFAULT NULL,
  `sumner_wa_warehouse` varchar(255) DEFAULT NULL,
  `avenel_nj_warehouse` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`internal_id`),
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updated-inventory`
--

INSERT INTO `updated-inventory` (`internal_id`, `sku`, `chino_ca_warehouse`, `summerville_sc_warehouse`, `wilmer_tx_warehouse`, `sumner_wa_warehouse`, `avenel_nj_warehouse`) VALUES
(11642, 'A1000', '1499', '111', '155', '23', ''),
(11744, 'A1000a', '50', '30', '70', '17', '16'),
(14321, 'A1010', '131', '32', '20', '', ''),
(116421, 'A1000x', '149009', '111', '155', '23', ''),
(117441, 'A1000ax', '50', '30', '70', '17', '16'),
(143211, 'A1010x', '131', '32', '20', '', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
