package com.example.demo;

import java.util.ArrayList;
import java.sql.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoApplicationController {
	

	@GetMapping("/showBooks")
	public ArrayList<Book> getFunc()
	{
		ArrayList<Book> ar = new ArrayList<Book>();
		Connjdbc conn = new Connjdbc();
		String query ="select * from Books";
		try {
			Statement st = conn.con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while(rs.next())
			{
				Book b = new Book();
				b.setBookId(rs.getInt(1));
				b.setBookName(rs.getString(2));
				b.setPrice(rs.getInt(3));
				ar.add(b);
				System.out.println("book added");
			}
			conn.con.close();
			
		}catch(Exception e)
		{
			System.out.println(e);
		}
		
		return ar;
	}
	@PostMapping("/addBook")
	public void addBook(@RequestBody Book bk)
	{
		Connjdbc conn = new Connjdbc();
		try {
			String sql = "INSERT INTO Books VALUES(?, ?, ?)";
			PreparedStatement statement = conn.con.prepareStatement(sql);
			statement.setInt(1,bk.getBookId());
			statement.setString(2,bk.getBookName());
			statement.setInt(3,bk.getPrice());
			statement.executeUpdate();
			System.out.println("Record created.");
			} catch (SQLException e) {
			e.printStackTrace();
			}

	}
	@DeleteMapping("/deleteBook/{bookId}")  
	public void deleteBook(@PathVariable("bookId") int bookId)   
	{  
		Connjdbc conn = new Connjdbc();
		try {
			   String sql = "DELETE FROM Books WHERE bookId = ?";
			   PreparedStatement statement = conn.con.prepareStatement(sql);
			   statement.setInt(1,bookId);
			   statement.executeUpdate();
			   System.out.println("Record deleted.");
			} catch (SQLException e) {
			   e.printStackTrace();
			}
	}  
	@PutMapping("/updateBook/{bookId}")  
	public void updateBook(@PathVariable("bookId") int bookId, @RequestBody Book bk)   
	{  
		Connjdbc conn = new Connjdbc();
		try {
		   String sql = "UPDATE Books SET bookName = ?, price = ? WHERE bookId = ?";
		   PreparedStatement statement = conn.con.prepareStatement(sql);
		   statement.setString(1,bk.getBookName());
		   statement.setInt(2, bk.getPrice());
		   statement.setInt(3, bookId);
		   statement.executeUpdate();
		   System.out.println("Record updated.");
		} catch (SQLException e) {
		   e.printStackTrace();
		}
	}  
	
}
