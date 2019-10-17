-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2019 at 01:01 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kaye`
--

-- --------------------------------------------------------

--
-- Table structure for table `headers`
--

CREATE TABLE `headers` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `DESCRIPTION` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `VALUE` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `REMARKS` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `headers`
--

INSERT INTO `headers` (`ID`, `NAME`, `DESCRIPTION`, `VALUE`, `REMARKS`) VALUES
(187, '1', '1.jpg', '661937-1.jpg', ''),
(188, '2', '2.jpg', '541137-2.jpg', ''),
(189, 'ResumePic', 'ResumePic.jpg', '56180-resumepic.jpg', ''),
(190, '12', '12.png', '853656-12.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(60) NOT NULL,
  `app` varchar(60) NOT NULL,
  `appname` varchar(60) NOT NULL,
  `apptype` varchar(60) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(250) NOT NULL,
  `value` varchar(250) NOT NULL,
  `align` int(3) NOT NULL,
  `remarks` varchar(60) NOT NULL,
  `createddate` varchar(60) NOT NULL,
  `updateddate` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(60) NOT NULL,
  `app` varchar(60) NOT NULL,
  `appname` varchar(60) NOT NULL,
  `name` varchar(60) NOT NULL,
  `description` varchar(250) NOT NULL,
  `value` varchar(250) NOT NULL,
  `align` int(60) NOT NULL,
  `remarks` varchar(60) NOT NULL,
  `createddate` varchar(60) NOT NULL,
  `updateddate` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `app`, `appname`, `name`, `description`, `value`, `align`, `remarks`, `createddate`, `updateddate`) VALUES
(1, 'test', 'test', 'test', 'test', 'test', 0, 'test', 'test', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `headers`
--
ALTER TABLE `headers`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `headers`
--
ALTER TABLE `headers`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=191;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(60) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
