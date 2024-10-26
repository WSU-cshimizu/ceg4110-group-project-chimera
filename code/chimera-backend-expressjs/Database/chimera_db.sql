CREATE TABLE kwn_entity (
    keid           INT NOT NULL,
    ketype         VARCHAR(20),
    keorigin       VARCHAR(4000),
    keabilities    VARCHAR(4000),
    kebehavior     VARCHAR(4000),
    keappearance   VARCHAR(4000),
    keemf5         INT,
    keghostorbs    INT,
    kespiritbox    INT,
    kefreezingtemp INT,
    keuv           INT,
    keghostwriting INT,
    kedots         INT,
    PRIMARY KEY (keid)
);

CREATE TABLE location (
    locationid    INT NOT NULL,
    building_name VARCHAR(4000),
    room_number   INT,
    roomdetails   VARCHAR(4000),
    PRIMARY KEY (locationid)
);

CREATE TABLE report (
    reportid                    INT NOT NULL,
    rpt_entity_reportedentityid INT NOT NULL,
    location_locationid         INT NOT NULL,
    datetime                    DATETIME,
    weather                     VARCHAR(4000),
    reportedevidence            VARCHAR(4000),
    reportedabilities           VARCHAR(4000),
    reportedbehavior            VARCHAR(4000),
    reportedappearance          VARCHAR(4000),
    reportedphenomena           VARCHAR(4000),
    user_userid                 INT NOT NULL,
    PRIMARY KEY (reportid)
);

CREATE TABLE rpt_entity (
    rptid               INT NOT NULL,
    kwn_entity_entityid INT NOT NULL,
    location_locationid INT NOT NULL,
    rptabilities        VARCHAR(4000),
    rptappearance       VARCHAR(4000),
    rptbehavior         VARCHAR(4000),
    rptemf5             INT,
    rptghostorbs        INT,
    rptspiritbox        INT,
    rptfreezingtemp     INT,
    rptuv               INT,
    rptghostwriting     INT,
    rptdots             INT,
    PRIMARY KEY (rptid)
);

CREATE TABLE users (
    userid    INT NOT NULL,
    useremail VARCHAR(4000),
    PRIMARY KEY (userid)
);

ALTER TABLE report
    ADD FOREIGN KEY (location_locationid)
    REFERENCES location (locationid);

ALTER TABLE report
    ADD FOREIGN KEY (rpt_entity_reportedentityid)
    REFERENCES rpt_entity (rptid);

ALTER TABLE report
    ADD FOREIGN KEY (user_userid)
    REFERENCES users (userid);

ALTER TABLE rpt_entity
    ADD FOREIGN KEY (kwn_entity_entityid)
    REFERENCES kwn_entity (keid);

ALTER TABLE rpt_entity
    ADD FOREIGN KEY (location_locationid)
    REFERENCES location (locationid);
