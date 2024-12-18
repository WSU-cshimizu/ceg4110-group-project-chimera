import mysql.connector
from mysql.connector import Error


def create_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="chimera_db"
        )
        if connection.is_connected():
            # print("Connected to the database")
            return connection
    except Error as e:
        # print(f"Error: {e}")
        return None
