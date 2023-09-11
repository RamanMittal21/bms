package com.example.demo;

import java.sql.*;

public class Connjdbc{
	Connection con;
	
	public Connjdbc()
	{
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			System.out.println("driver loaded");
			
			con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","raman21");
			System.out.println("connection established");
			
		}
		catch(ClassNotFoundException se)
		{
			System.out.println(se);
		}
		catch(SQLException se)
		{
			System.out.println(se);
		}
	}
}
