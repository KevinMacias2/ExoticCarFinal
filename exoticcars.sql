-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2022 a las 00:24:34
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `exoticcars`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Nissan', NULL, '2022-11-26 02:20:53'),
(2, 'Chevrolet', NULL, NULL),
(3, 'GMC', NULL, NULL),
(4, 'RAM', NULL, NULL),
(5, 'Audi', NULL, NULL),
(6, 'Dodge', NULL, NULL),
(7, 'Ford', NULL, NULL),
(8, 'Porsche', NULL, NULL),
(9, 'BMW', NULL, NULL),
(10, 'Mercedes-Benz', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `km` int(11) NOT NULL,
  `source` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `equipment` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numSales` int(11) NOT NULL,
  `observation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brandId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `model`, `type`, `year`, `color`, `price`, `km`, `source`, `equipment`, `numSales`, `observation`, `brandId`, `created_at`, `updated_at`) VALUES
(1, 'Nissan GTR', 'Coupé', 2017, 'Orange', 1980000, 20000, 'Japan', 'Maximum speed	315 km/h\r\nAceleración 0-100 km/h	2,8 s\r\nMaximum Power	570 HP / 419 kW\r\nRevolutions	6.800 rpm', 1, 'All good', 1, NULL, '2022-12-09 00:43:41'),
(2, 'Camaro ZL1 ', 'Coupe', 2018, 'White', 1500000, 35000, 'United States', 'Engine: 6.2L LT4 Supercharged V-8, VVT with Direct Injection\r\nHorsepower: 650 hp\r\nFuel tank capacity: 19 gal. / 72 liters', 0, 'All Good', 2, NULL, NULL),
(3, 'Sierra Denali', 'Pick-up', 2022, 'Black', 1400000, 10000, 'United States', 'Horsepower: 355 hp @ 5,600 rpm\r\nTorque:	383 lb-ft @ 4,100 rpm\r\nCylinders: V8\r\nTotal Seating: 5', 2, 'All Good ', 3, NULL, NULL),
(4, '1500 TRX', 'Pick-up', 2022, 'Red', 1650000, 9000, 'United States', 'Liters (L) of engine: 6.2\r\nCylinder configuration: V-8\r\nHorsepower (hp): 702 at 6100 RPM', 1, 'All good', 4, NULL, NULL),
(5, 'R8 Spider V10', 'Central engine', 2020, 'Red', 2200000, 22000, 'Germany', 'Max Power (bhp@rpm): 602bhp@8250rpm\r\nMax Torque (nm@rpm): 560Nm@6500rpm\r\nSeating Capacity: 2', 2, 'All Good', 5, NULL, NULL),
(6, 'Challenger SRT Hellcat Redeye', 'Coupé ', 2021, 'Red', 1900000, 34000, 'United States', 'Engine Type: Supercharged and intercooled pushrod 16-valve V-8\r\nPower: 797 hp @ 6300 rpm\r\nTorque: 707 lb-ft @ 4500 rpm', 1, 'All good', 6, NULL, NULL),
(7, 'Shelby GT500', 'Coupe', 2022, 'Blue/White', 2600000, 19000, 'United States', 'Engine type:supercharged and intercooled DOHC 32-valve V-8, aluminum block and heads\r\nPower: 760 hp @ 7300 rpm\r\nTorque: 625 lb-ft @ 5000 rpm', 2, 'All good ', 7, NULL, NULL),
(8, '718 Cayman GT4 RS', 'Coupé', 2022, 'Yellow', 2900000, 12000, 'Germany', 'Engine: Six-cylinder naturally aspirated boxer engine with particulate filter \r\nMaximum power: 368 kW (500 hp)\r\nTop speed: 315 km/h (315 km/h)\r\nAcceleration 0-100kph, 3.4 sec', 2, 'All good', 8, NULL, NULL),
(9, 'Competition M4', 'Coupé', 2022, 'Yellow', 2310000, 25000, 'Germany', 'Engine type: Twin-turbocharged and intercooled inline-6\r\nPower: 473 hp @ 6250 rpm\r\nTorque: 406 lb-ft @ 2650 rpm', 3, 'All good', 9, NULL, NULL),
(10, 'AMG-GTR', 'Coupé', 2021, 'Green', 4500000, 17000, 'Germany', 'Top Speed: 318 Kmph\r\nAcceleration (0-100 kmph): 3.6 seconds\r\nEngine Type: M178 Twin-Turbocharged V8\r\nMax Power (bhp@rpm): 577 bhp @ 6250 rpm\r\nMax Torque (Nm@rpm): 700 Nm @ 2100 rpm', 1, 'All good', 10, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `minimumWage` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `description`, `minimumWage`, `created_at`, `updated_at`) VALUES
(1, 'Manager', 45010, NULL, '2022-11-26 02:31:31'),
(2, 'Assistant Manager', 35000, NULL, NULL),
(3, 'Supervisor', 30000, NULL, NULL),
(4, 'Seller', 25000, NULL, NULL),
(5, 'Security', 15000, NULL, NULL),
(6, 'Cleaners', 8000, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CP` int(11) NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rolJob` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jobId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `lastName`, `address`, `location`, `city`, `CP`, `phone`, `rolJob`, `salary`, `jobId`, `created_at`, `updated_at`) VALUES
(1, 'Ricardo', 'Gómez', 'Sierra Madre Oriental 313, Los Bosques, 20120 Aguascalientes, Ags.', 'Aguascalientes', 'Aguascalientes', 20257, '4492964318', 'Mechanical engineer', '37000', 1, NULL, '2022-11-26 03:27:07'),
(2, 'Fernanda', 'Salinas', 'La Noria 102, Lomas del Campestre II, Aguascalientes, Ags.', 'Aguascalientes', 'Aguascalientes', 20119, '4496392854', 'Chemical engineer', '30000', 2, NULL, NULL),
(3, 'Enrique', 'Perezchica', 'De Las Americas 212,Campestre, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 20129, '4497254902', 'Project manager', '48000', 3, NULL, NULL),
(4, 'Michelle', 'Camacho', 'Del Pirul 109 Campestre, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 10119, '4493447291', 'Developer', '32000', 4, NULL, NULL),
(5, 'Isabel', 'Rubalcava', 'Jardines 11 La Herradura, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 20100, '4493726829', 'Manager', '40000', 5, NULL, NULL),
(6, 'Derek', 'Macias', 'C. Ramón Rodríguez, Q Residencial Campestre, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 20328, '4498264902', 'Director', '31000', 6, NULL, NULL),
(7, 'Javier', 'Cabrera', 'Trojes de Oriente II, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 20145, '4491648912', 'Quality control supervisor', '29000', 7, NULL, NULL),
(8, 'Sofia', 'Echeverria', 'Graneros 606, Valle del Campestre, 20120 Aguascalientes, Ags.', 'Aguascalientes', 'Aguascalientes', 20067, '4498726383', 'Manager', '48000', 8, NULL, NULL),
(9, 'Kevin', 'Duron', 'Tapias 117,Lomas del Campestre II, Aguascalientes, Ags.\r\n', 'Aguascalientes', 'Aguascalientes', 20119, '4499475281', 'Pediatrician', '52000', 9, NULL, NULL),
(10, 'Mariana', 'Sánchez', 'Silos 116, Lomas del Campestre II, Aguascalientes, Ags.', 'Aguascalientes', 'Aguascalientes', 20119, '4498263022', 'Neurologist', '55000', 10, NULL, NULL),
(11, 'Kevin', 'Duron', '1275 W 9th St', 'ojnofjcnef', 'Pomona', 89473, '870842', 'sjncjev', '7879743', 1, '2022-11-22 09:20:42', '2022-11-22 09:20:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `labor_data`
--

CREATE TABLE `labor_data` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameJob` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addressJob` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `labor_data`
--

INSERT INTO `labor_data` (`id`, `nameJob`, `addressJob`, `phone`, `location`, `created_at`, `updated_at`) VALUES
(1, 'Flex', 'Blvd. a Zacatecas, C. Paseos de Venaderos Km. 9.5, 20900 Aguascalientes, Ags', '4496753217', 'Aguascalientes', NULL, '2022-11-26 02:44:23'),
(2, 'Veolia', 'Jose Antonio 115 Parque Industrial Siglo XXI,Aguascalientes,Ags', '4499105486', 'Aguascalientes', NULL, NULL),
(3, 'Softtek', 'Av. Eugenio Garza Sada, Av. Ciencia y Tecnología 902, 20328 Aguascalientes,Ags.', '4498542369', 'Aguascalientes', NULL, NULL),
(4, 'Capgemini', 'Edificio 1A Paseo de San Telmo 1A Piso 2, Prol. Gral. Ignacio Zaragoza #4200, Trojes de Alonso, 20116 Aguascalientes, Ags.', '4495003700', 'Aguascalientes', NULL, NULL),
(5, 'Nissan Torres Corzo', 'Av. Aguascalientes Nte 711, Trojes de Alonso, 20116 Aguascalientes, Ags.', '4499109393', 'Aguascalientes', NULL, NULL),
(6, 'Instituto Tecnológico de Aguascalientes', 'Av. Adolfo López Mateos Ote. 1801, Bona Gens, 20256 Aguascalientes, Ags.', '4499105002', 'Aguascalientes', NULL, NULL),
(7, 'Donaldson', 'Ángel Dorronsoro Gándara 106, Cd Industrial, 20290 Aguascalientes, Ags.', '4491491200', 'Aguascalientes', NULL, NULL),
(8, 'CitiBanamex Corporativo', 'Av. Las Americas 1603, Santa Elena, 20230 Aguascalientes, Ags.', '8000212345', 'Aguascalientes', NULL, NULL),
(9, 'CMQ Hospital', 'República de Honduras 218, El Dorado 1ra Secc, 20235 Aguascalientes, Ags.', '4499782241', 'Aguascalientes', NULL, NULL),
(10, 'Hospital Star Médica ', 'Avenida Universidad 101, Villas de la Universidad, 20020 Aguascalientes, Ags.', '4499109900', 'Aguascalientes', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2022_10_31_181930_create_brands_table', 1),
(5, '2022_10_31_182008_create_categories_table', 3),
(6, '2022_10_31_182047_create_sellers_table', 4),
(9, '2022_10_31_182549_create_labor_data_table', 5),
(10, '2022_10_31_182357_create_customers_table', 6),
(12, '2014_10_12_000000_create_users_table', 8),
(13, '2022_10_31_181837_create_cars_table', 9),
(14, '2022_10_31_182204_create_sales_table', 10),
(15, '2014_10_12_100000_create_password_resets_table', 11),
(16, '2016_06_01_000001_create_oauth_auth_codes_table', 11),
(17, '2016_06_01_000002_create_oauth_access_tokens_table', 11),
(18, '2016_06_01_000003_create_oauth_refresh_tokens_table', 11),
(19, '2016_06_01_000004_create_oauth_clients_table', 11),
(20, '2016_06_01_000005_create_oauth_personal_access_clients_table', 11),
(21, '2019_08_19_000000_create_failed_jobs_table', 11),
(22, '2019_12_14_000001_create_personal_access_tokens_table', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'Cb6loxOvZCm65psnfzlE7Zam7FH1U16dl4C4yQKR', NULL, 'http://localhost', 1, 0, 0, '2022-11-21 06:45:38', '2022-11-21 06:45:38'),
(2, NULL, 'Laravel Password Grant Client', '9rWBLr3Rk0AdMkmTGr7HPV0AWg0UXMxjctIeIShU', 'users', 'http://localhost', 0, 1, 0, '2022-11-21 06:45:38', '2022-11-21 06:45:38'),
(3, NULL, 'Laravel Personal Access Client', 'DHcnFAxbIcAGNVQjnZ5faPUTmw6e5zyR1uIj6aK8', NULL, 'http://localhost', 1, 0, 0, '2022-11-21 06:47:52', '2022-11-21 06:47:52'),
(4, NULL, 'Laravel Password Grant Client', 'b4WFQOEqsANe2nil2qmyAnTa1651QOeZwxcShNlj', 'users', 'http://localhost', 0, 1, 0, '2022-11-21 06:47:52', '2022-11-21 06:47:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-11-21 06:45:38', '2022-11-21 06:45:38'),
(2, 3, '2022-11-21 06:47:52', '2022-11-21 06:47:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dateSales` date NOT NULL,
  `carId` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `sellerId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `dateSales`, `carId`, `customerId`, `sellerId`, `created_at`, `updated_at`) VALUES
(1, '2022-11-01', 1, 1, 1, NULL, NULL),
(2, '2022-11-02', 2, 2, 2, NULL, '2022-11-26 03:54:45'),
(3, '2022-11-03', 3, 3, 3, NULL, NULL),
(4, '2022-11-04', 4, 4, 4, NULL, NULL),
(5, '2022-11-05', 5, 5, 5, NULL, NULL),
(6, '2022-11-06', 6, 6, 1, NULL, NULL),
(7, '2022-11-07', 7, 7, 2, NULL, NULL),
(8, '2022-10-08', 8, 8, 3, NULL, NULL),
(9, '2022-10-09', 9, 9, 4, NULL, NULL),
(10, '2022-10-10', 10, 10, 5, NULL, NULL),
(13, '2022-11-22', 1, 2, 3, '2022-11-22 12:25:24', '2022-11-22 12:25:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sellers`
--

CREATE TABLE `sellers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sellers`
--

INSERT INTO `sellers` (`id`, `name`, `lastName`, `address`, `phone`, `date`, `categoryId`, `created_at`, `updated_at`) VALUES
(1, 'Santiago', 'Mendez', 'Conasupo 118, Lázaro Cárdenas, 20270 Aguascalientes, Ags.', '4491638294', '1987-11-09', 4, NULL, '2022-11-26 03:39:22'),
(2, 'Victoria', 'Covarrubias', 'Sierra Madre Oriental 2055, Los Bosques, 20120 Aguascalientes, Ags.\r\n', '4498267377', '1990-06-15', 4, NULL, NULL),
(3, 'Marco', 'Castillo', 'Caritativas 130 Villa Teresa, 20126 Aguascalientes, Ags.\r\n', '4497279402', '1994-01-19', 4, NULL, NULL),
(4, 'Alberto', 'Pérez', 'Vino 202, Parras, 20157 Aguascalientes, Ags.\r\n', '4492846729', '1988-05-29', 4, NULL, NULL),
(5, 'Denica', 'Torres', 'San Cosme FED,San Cayetano, 20010 Aguascalientes, Ags.\r\n', '4498257499', '2000-02-05', 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cars_brandid_foreign` (`brandId`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_jobid_foreign` (`jobId`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `labor_data`
--
ALTER TABLE `labor_data`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_carid_foreign` (`carId`),
  ADD KEY `sales_customerid_foreign` (`customerId`),
  ADD KEY `sales_sellerid_foreign` (`sellerId`);

--
-- Indices de la tabla `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellers_categoryid_foreign` (`categoryId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `labor_data`
--
ALTER TABLE `labor_data`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_brandid_foreign` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_jobid_foreign` FOREIGN KEY (`jobId`) REFERENCES `labor_data` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_carid_foreign` FOREIGN KEY (`carId`) REFERENCES `cars` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sales_customerid_foreign` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `sales_sellerid_foreign` FOREIGN KEY (`sellerId`) REFERENCES `sellers` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `sellers`
--
ALTER TABLE `sellers`
  ADD CONSTRAINT `sellers_categoryid_foreign` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
