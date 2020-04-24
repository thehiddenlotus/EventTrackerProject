package com.skilldistillery.grateful.services;

import java.time.LocalDate;
import java.util.List;

import com.skilldistillery.grateful.entities.Entry;

public interface EntryService {

	public Entry findById(int id);
	public List<Entry> findAll();
	public List<Entry> findByDate(LocalDate date);
	public List<Entry> findByMood(int id);
	public List<Entry> findByKeyword(String keyword);
	public Entry add(Entry entry);
	public Entry save(int id, Entry entry);
	public boolean remove(int id);
	
}
