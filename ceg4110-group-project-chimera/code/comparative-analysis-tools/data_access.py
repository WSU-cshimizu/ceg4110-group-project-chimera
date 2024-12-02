from db_connect import create_connection


def get_reports_data():
    """Fetches all reports from the database."""
    try:
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM report")
            reports = cursor.fetchall()
            return reports
    except Exception as e:
        print(f"Error fetching reports data: {e}")
        return []
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()


def get_entities():
    """Fetches all known entities."""
    try:
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM kwn_entity")
            entities = cursor.fetchall()
            return entities
    except Exception as e:
        print(f"Error fetching entities data: {e}")
        return []
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()


def get_locations():
    """Fetches all locations."""
    try:
        connection = create_connection()
        if connection:
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM location")
            locations = cursor.fetchall()
            return locations
    except Exception as e:
        print(f"Error fetching locations data: {e}")
        return []
    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
