-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: chimera_db
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kwn_entity`
--

DROP TABLE IF EXISTS `kwn_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kwn_entity` (
  `keid` int NOT NULL,
  `ketype` text,
  `keorigin` text,
  `keabilities` text,
  `kebehavior` text,
  `keappearance` text,
  `keemf5` int DEFAULT NULL,
  `keghostorbs` int DEFAULT NULL,
  `kespiritbox` int DEFAULT NULL,
  `kefreezingtemp` int DEFAULT NULL,
  `keuv` int DEFAULT NULL,
  `keghostwriting` int DEFAULT NULL,
  `kedots` int DEFAULT NULL,
  PRIMARY KEY (`keid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kwn_entity`
--

LOCK TABLES `kwn_entity` WRITE;
/*!40000 ALTER TABLE `kwn_entity` DISABLE KEYS */;
INSERT INTO `kwn_entity` VALUES (1,'Spirit','Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.','A Spirit can be temporarily stopped by burning Incense near them. Spirits have no other special abilities.','With no special powers, and a harsher reaction to Incense, Spirits serve as a baseline to measure other ghosts against. With their behavior not being especially unique amongst the ghosts, its overall lack of defining traits can confuse investigators; therefore, unless clear evidence is established, a Spirit can be easily mistaken for another entity.','Spirits have no unique appearances, taking on the form of their former self.',1,0,1,0,0,1,0),(2,'Wraith','Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.','When the Wraith is not hunting, it may teleport to a person, generating an EMF Level 2 reading at the location where it teleported to, but it is possible for this to be an EMF Level 5 reading instead. The Wraith will resume normal behaviour after teleporting.','The Wraith will never step in a salt pile, and therefore will never disturb them. This includes Blessed Salt during hunts, rendering it ineffective against one.','Wraiths have no unique appearances, taking on the form of their former self.',1,0,1,0,0,0,1),(3,'Phantom','A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.','If a successful photo is taken of a Phantom, the ghost will be invisible in the photo, and the photo will not contain any interference.','The Phantom has an ability where it will choose a random person and travel to their location (as opposed to roaming around). This will create an EMF Level 2 reading at the location where the roam ended. This behavior is somewhat similar to that of the Banshee and the Wraith; unlike Banshees, Phantoms do not select a specific person to target, and do not do this as often; and unlike Wraiths, the Phantom physically walks to that point rather than teleporting, and will set off Motion Sensors and disturb Salt on the way to it.','During a hunt, the Phantom flickers and is on average visible for shorter and invisible for longer compared to most other ghosts.',0,0,1,0,1,0,1),(4,'Poltergeist','One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.','The Poltergeist will occasionally use an ability that allows it to throw multiple nearby items at once, creating an EMF level 2 reading (the thrown items themselves generate EMF 3). The Poltergeist can use this ability even while the lights in its current room are on.','In general, the Poltergeist is more likely to throw items. Poltergeists can throw multiple objects at once, and with great force. With nothing to throw, Poltergeists become powerless.','Poltergeists have no unique appearances, taking on the form of their former self.',0,0,1,0,1,1,0),(5,'Banshee','The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.','The Banshee has an ability where it will choose a specific person and travel to their location (as opposed to roaming around). The Banshee physically walks to that point rather than teleporting, and will set off Motion Sensors and disturb Salt on the way to it. This person is now the Bansheees target and will be hunted relentlessly until they are dead. Once a Banshee strikes, only then will it find a new target.','The Banshees screams can be heard using a parabolic microphone. The Banshee will often only show themselves while singing and they will sing very frequently.','Banshees are most commonly reported as females but there are a handful of reports of male banshees. Most reports note that they appear beautiful while singing but that facade quickly changes when they are about to strike or if one gets too close to them while singing.',0,1,0,0,1,0,1),(6,'Jinn','A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.','While not a fast moving ghost, the Jinn will speed up to tremendous speed when further away from a target when it hunts. The Jinn often will leech off of a person while within the Jinns territory. The Jinn will also leech off of power from nearby electronic devices. ','The Jinn requires power to survive which is why it leechs off of both person and equipment. Shutting off the power to the building it resides in will not make the Jinn powerless, but will severly weaken it where it cannot use any abilities. ','Jinns have no unique appearances, taking on the form of their former self.',1,0,0,1,1,0,0),(7,'Mare','A Mare is the source of all nightmares, making it most powerful in the dark.','If a person turns on a light that is within 4 metres of a Mare, it has a small chance of turning the light off almost immediately. The Mare will more often attempt to break lights around it and will never turn on a light.','A Mare will have an increased chance to attack in the dark. Turning the lights on around the Mare will lower its chance to attack. Turning on the lights around or near a Mare will force the Mare to retreat into darkness.','Mares have no unique appearances, taking on the form of their former self.',0,1,1,0,0,1,0),(8,'Revenant','A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast.','While the Revenant has no unique abilities, it should not be underestimated. The Revenant is very slow when it hunts but will speed up very quickly to strike its prey.','A Revenant will travel at a significantly faster speed when hunting their prey. Although, hiding from the Revenant will cause it to move very slowly.','Revenants have no unique appearances, taking on the form of their former self.',0,1,0,1,0,1,0),(9,'Shade','A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are people nearby.','If at least one person is in the same room as a Shade, it will be unable to perform any interactions, or initiate a ghost event or a hunt. It may still perform these actions if it happens to wander into a room without people. ','The Shade is less likely to perform any interactions, only performing them once everyone has left the room the Shade is in.','When a Shade does appear, it is mostly reported to be either a shadowy figure or a ghost ball(Ball of fog that floats at around chest level, not to be confused with ghost orbs).',1,0,0,1,0,1,0),(10,'Demon','A Demon is one of the worst ghosts you can encounter. It has been known to attack without reason','The Demon can hunt the moment a person enters into a building containing one. Smudging one with an incense will stun it for a much shorter time than most ghosts. The Demon will hunt more often than other ghosts.','Demons are the most aggresive ghosts out there. Demon sightings always come with reports of violence. Demons fear the Crucifix and will be less aggressive near one.','Demons tend to have horrifying forms, being commonly depicted with horns, tails, claws, and other inhuman appendages.',0,0,0,1,1,1,0),(11,'Yurei','Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.','Yureis are known to slam doors shut in attempt to trap its prey. They feast off of a persons sanity once they have their prey trapped.','While the Yurei prefers to trap its prey before hunting, it also can be trapped itself in a room should a person smudge the Yurei with a incense.','Yureis have no unique appearances, taking on the form of their former self.',0,1,0,1,0,0,1),(12,'Oni','Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.','Oni are more active whilst people are nearby and will drain their sanity faster when manifesting.','Onis cannot perform the \"airball\" event, which involves a physical ball of fog moving towards the person, usually disappearing with a hiss sound upon collision. Will prefer showing in its full form during a manifestation event as opposed to a shadowy or translucent form.','Onis are usually portrayed as hulking figures with horns on their heads, sharp claws and tusks, an odd skin tone such as red, green, or blue, and carrying large iron clubs. Onis on average are invisible for shorter and visible for longer compared to most other ghosts.',1,0,0,1,0,0,1),(13,'Yokai','Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.','Talking near a Yokai will anger it, increasing the chance of an attack. Items such as a music box or other objects that make noise can cause it to go into a frenzy and hunt immediately.','The Yokai is identifiable through two distinctive traits: it will hunt more often when people are together and talking near it, but its ability to detect someone hiding during a hunt through voice or electronics will be limited. For example, it will be less likely to follow a person past multiple line-of-sight breaks, and will not be attracted to held electronics unless the Yokai is already very close to the holder.','Yokais have no unique appearances, taking on the form of their former self.',0,1,1,0,0,0,1),(14,'Hantu','A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.','The Hantu will speed up the colder a room is but will slow down to a crawl in warmer rooms. Hantus will attempt to turn off power to a building as much as possible and will never turn on a breaker.','Hantus a a simple ghost were their activity is based off of the temperature of the room they are in. Because of this, they will stop at nothing to shut off the power if they believe it will help cool down the building.','While Hantus will take on the form of their former self, they can be easily identified by them emitting freezing breath near its head in any room as long as the breaker is off.',0,1,0,1,1,0,0),(15,'Goryo','When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.','The Goryo will only enter in a D.O.T.S state if no people are in the same room as the ghost. In addition, its D.O.T.S silhouette is only visible through a Video Camera, and cannot be seen with the naked eye. A Goryo will still manifest normally during ghost events and hunts with its ghost model, which does not require any special equipment to be seen.','When performing a roam, the Goryo can only perform short roams, rather than either short or long roams. The Goryo will not leave its favourite room as often as other ghosts and cannot change favourite rooms.','Goryos have no unique appearances, taking on the form of their former self.',1,0,0,0,1,0,1),(16,'Myling','A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.','When hunting, a Mylings footstep and vocalizations sounds will only be audible to people within 12 meters, slightly greater than the range required for electronic interference, instead of the usual 20 meters. The volume of footsteps is slightly muffled near the limit, but quickly becomes discernible as it approaches.','The Myling produces paranormal sounds (that can only be heard through a Parabolic Microphone) more often than other ghosts. Note that it has quieter footsteps and vocalizations during hunts','Mylings are ghosts of children who were either killed by their parents, unbaptised, or abandoned.  They are usually depicted as small children in a early stage of decay (swollen and discoloured skin) but can choose to appear as adult if that was the age they would have been had they been alive.',1,0,0,0,1,1,0),(17,'Onryo','The Onryo is often referred to as \"The Wrathful Spirit\". It steals souls from dying victims bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.','If the Onryo attempts a hunt within 4 metres of any type of flame, it will blow out the flame instead, and the hunt will fail. If both a crucifix and a flame are within range, the flame will take priority over the crucifix for preventing the hunt.','If the Onryo has killed, the Onryo will blow out sources of flame (lit firelight, igniter, or campfire) at a higher frequency. More deaths increases this frequency. It will blow out flames at the same frequency as other ghosts if it doesnt kill.','Onryos have no unique appearances, taking on the form of their former self.',0,1,1,1,0,0,0),(18,'Twins','These ghosts have been reported to mimic each others actions. They alternate their attacks to confuse their prey.','The Twins are known for existing as a pair, with both Twins able to interact with the environment and start hunts separately.','The Twins primary strength is its ability to misdirect: its core ability can very easily conjure red herring interactions at parts of the location far from the favourite room where it would give evidence, misleading hunters and delaying their efforts to identify it. ','While the Twins do not have a unique appearance, they will both never show themselves at the same time. Reports note that they look so similair it may be difficult to identify the twins as two seperate ghosts.',1,0,1,1,0,0,0),(19,'Raiju','A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.','When a Raiju manifests during a ghost event or a hunt, it will interfere with electronics that are up to 15 metres away on the same floor, instead of the usual 10 metres.','During hunts, if the Raiju is within a certain distance of at least one piece of active electronic equipment, it will move much quicker than other ghosts.','Raijus have no unique appearances, taking on the form of their former self.',1,1,0,0,0,0,1),(20,'Obake','Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.','During a hunt, the Obake will occasionally shapeshift into a different ghost model of the same gender during a flicker. Obakes sometimes will leave a unique UV fingerprint on doors as a handprint with 6 fingers.','The Obake will attempt to hide any fingerprints it leaves, showing no trace of shape shifting. ','When hunting, the Obake may change what it looks like in attempt to confuse its prey or even in attempt to bait their prey.',1,1,0,0,1,0,0),(21,'The Mimic','The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.','The Mimics fundamental nature means that it is unpredictable: it can theoretically have the powers of almost any ghost type at any time.','Were unsure what this ghost is capable of. Be careful. Several reports have noted ghost orb sightings near mimics.','While not a shape-shifter inherently, it can very well mimic the Obake as well as any other ghost. Therefore, you may need multiple sightings to confirm whether a mimic is present.',0,0,1,1,1,0,0),(22,'Moroi','Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.','Its ability to \"curse\" players to lower their Sanity, combined with its increased speed at low sanity levels, can cause it to become the fastest ghost known to us.','The weaker their victims, the stronger the Moroi becomes. Moroi suffer from hyperosmia, weakening them for longer periods. If they are smudged by an incense, they are temporarily disoriented longer than the average ghost.','Morois have no unique appearances, taking on the form of their former self.',0,0,1,1,0,1,0),(23,'Deogen','Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years. These ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.','The Deogen always knows where its prey is at. If a Deogen is far away from a person, it will rapidly approach them only slowing down once they are close to their prey. The spirit box can pick up their heavy breathing when nearby a deogen.','Deogens constantly sense the living. You can run but you cant hide. Deogens require a lot of energy to form and will move very slowly when approaching its victim.','While Deogens do not have a unique appearance, they are easily identifiable by simply their speed once they are next to their prey. Reports note of deogens matching the description of a strange yellow-eyed fog.',0,0,1,0,0,1,1),(24,'Thaye','Thaye have been known to rapidly age over time, even in the afterlife. From what weve learned, they seem to deteriorate faster while within the presence of the living.','Thayes becomes very active the first time a player gets nearby, but the more time players spend near it, the quieter and slower it becomes.','Upon entering the location, Thaye will become active, defensive and agile. Thaye will weaken over time, making them weaker, slower and less aggressive. The Ouija Board can help investigators determine the thayes age. Once an age is determined, wait some tiime and test again. The thaye will respond with an older age.','Thayes have no unique appearances, taking on the form of their former self.',0,1,0,0,0,1,1),(25,'asdf','asdfa','filasdf','psdfipaf','lasldfa',1,10,123,10,10,10,10);
/*!40000 ALTER TABLE `kwn_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `locationid` int NOT NULL,
  `building_name` text,
  `room_number` int DEFAULT NULL,
  `roomdetails` text,
  PRIMARY KEY (`locationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Library',1,'Library Basement Storage Room and Breaker'),(2,'Library',2,'Library Basement Lab'),(3,'Library',101,'Librarians Office'),(4,'Library',102,'Library Front Desk'),(5,'Library',103,'Library Main Lobby'),(6,'Library',201,'Library Archives'),(7,'Library',202,'Library Fiction Section'),(8,'Library',203,'Library Nonfiction Section'),(9,'Oelman Hall',1,'Oelman Hall Basement Storage Room and Breaker'),(10,'Oelman Hall',2,'Oelman Hall Basement Boiler Room'),(11,'Oelman Hall',101,'Oelman Hall 101 Lecture Hall'),(12,'Oelman Hall',102,'Oelman Hall 102 Lab'),(13,'Oelman Hall',103,'Oelman Hall 103 Lecture Hall'),(14,'Oelman Hall',201,'Oelman Hall 201 Chem Lab'),(15,'Oelman Hall',202,'Oelman Hall 202 Male Restrooms'),(16,'Oelman Hall',203,'Oelman Hall 203 Female Restrooms'),(17,'tom',1,'alsdfasdf');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `reportid` int NOT NULL AUTO_INCREMENT,
  `title` text,
  `rpt_entity_reportedentityid` int NOT NULL,
  `location_locationid` int NOT NULL,
  `datetime` datetime DEFAULT NULL,
  `reportedevidence` text,
  `user_userid` int NOT NULL,
  `is_anonymous` BOOLEAN,

  PRIMARY KEY (`reportid`),
  KEY `location_locationid` (`location_locationid`),
  KEY `rpt_entity_reportedentityid` (`rpt_entity_reportedentityid`),
  KEY `user_userid` (`user_userid`),
  CONSTRAINT `report_ibfk_1` FOREIGN KEY (`location_locationid`) REFERENCES `location` (`locationid`),
  CONSTRAINT `report_ibfk_2` FOREIGN KEY (`rpt_entity_reportedentityid`) REFERENCES `rpt_entity` (`rptid`),
  CONSTRAINT `report_ibfk_3` FOREIGN KEY (`user_userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (1,1,1,'2024-02-14 15:30:00','asdf',1);
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rpt_entity`
--

DROP TABLE IF EXISTS `rpt_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rpt_entity` (
  `rptid` int NOT NULL,
  `kwn_entity_entityid` int NOT NULL,
  `location_locationid` int NOT NULL,
  `rptabilities` text,
  `rptappearance` text,
  `rptbehavior` text,
  `rptemf5` int DEFAULT NULL,
  `rptghostorbs` int DEFAULT NULL,
  `rptspiritbox` int DEFAULT NULL,
  `rptfreezingtemp` int DEFAULT NULL,
  `rptuv` int DEFAULT NULL,
  `rptghostwriting` int DEFAULT NULL,
  `rptdots` int DEFAULT NULL,
  PRIMARY KEY (`rptid`),
  KEY `kwn_entity_entityid` (`kwn_entity_entityid`),
  KEY `location_locationid` (`location_locationid`),
  CONSTRAINT `rpt_entity_ibfk_1` FOREIGN KEY (`kwn_entity_entityid`) REFERENCES `kwn_entity` (`keid`),
  CONSTRAINT `rpt_entity_ibfk_2` FOREIGN KEY (`location_locationid`) REFERENCES `location` (`locationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rpt_entity`
--

LOCK TABLES `rpt_entity` WRITE;
/*!40000 ALTER TABLE `rpt_entity` DISABLE KEYS */;
INSERT INTO `rpt_entity` VALUES (1,1,1,'test abilities','test appearance','test behavior',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `rpt_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `c_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL,
  `useremail` text,
  `password` text,
  `role` varchar(50) DEFAULT 'user'
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dfgdgdfgd'),(2,'dfgdgdfgd');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-06 16:38:43
