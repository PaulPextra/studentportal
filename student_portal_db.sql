use studentportal;

CREATE TABLE students (
	ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(55) NOT NULL,
    MiddleName VARCHAR(55),
    LastName VARCHAR(55) NOT NULL,
    Email VARCHAR(100)NOT NULL,
    DOB DATE NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    Address VARCHAR(150) NOT NULL,
    State VARCHAR(20) NOT NULL,
    LGA VARCHAR(100) NOT NULL,
    Next_Of_Kin VARCHAR(150) NOT NULL,
    Jamb_Score INTEGER NOT NULL,
    Admission_Status VARCHAR(15) NOT NULL DEFAULT 'Undecided',
    Image BLOB
);

INSERT INTO students (FirstName, MiddleName, LastName, Email, DOB, Gender, Phone,  Address, State, LGA, Next_Of_Kin, Jamb_Score)
VALUES ('Melody', 'Chinonso', 'Albert', 'albertmelody@gmail.com', '1996-12-16', 'Female', '08164540861', 'Lagos, Nigeria', 'Abia State', 'Umuahia North', 'Joy Albert', 250);