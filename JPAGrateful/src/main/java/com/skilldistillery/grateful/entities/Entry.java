package com.skilldistillery.grateful.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Entry {
	
	// f i e l d s

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;
	
	private LocalDate date;
	
	private Integer mood;
	
	private String gratitude;
	
	private String note;
	
	// c t o r s
	
	public Entry() {
		super();
	}
	
	public Entry(int id, String name) {
		super();
		this.id = id;
		this.title = name;
	}
	
	// m e t h o d s

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Integer getMood() {
		return mood;
	}

	public void setMood(Integer mood) {
		this.mood = mood;
	}

	public String getGratitude() {
		return gratitude;
	}

	public void setGratitude(String gratitude) {
		this.gratitude = gratitude;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	@Override
	public String toString() {
		return "Entry [id=" + id + ", title=" + title + ", date=" + date + ", mood=" + mood + ", gratitude=" + gratitude
				+ ", note=" + note + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Entry other = (Entry) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
	
}
