package com.skilldistillery.grateful.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.grateful.entities.Entry;

public interface EntryRepository extends JpaRepository<Entry, Integer> {

	public List<Entry> findByDate(LocalDate date);
	public List<Entry> findByMood(Integer mood);
	public List<Entry> findByTitleLikeOrGratitudeLikeOrNoteLike(String keyword1, String keyword2, String keyword3);
	
}
