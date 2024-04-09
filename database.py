from fileinput import close
import sqlite3
import os

def get_database_connection():
    database_path = os.path.join(os.getcwd(), 'sql.db')
    connection =sqlite3.connect(database_path)
    return connection

def get_all_movies():
    connection=get_database_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM filmer LEFT JOIN regissörer ON filmer.director_id = regissörer.id')
    data = cursor.fetchall()
   
    connection.close()
    return data