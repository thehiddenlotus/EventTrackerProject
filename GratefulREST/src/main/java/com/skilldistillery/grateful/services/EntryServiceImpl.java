package com.skilldistillery.grateful.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.grateful.entities.Entry;
import com.skilldistillery.grateful.repositories.EntryRepository;

@Service
public class EntryServiceImpl implements EntryService {

	// f i e l d s
	
	@Autowired
	private EntryRepository repo;

	// m e t h o d s
	
	@Override
	public Entry findById(int id) {
		if (repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		return null;
	}
	
	@Override
	public List<Entry> findAll() {
		return repo.findAll();
	}

	@Override
	public List<Entry> findByDate(LocalDate date) {
		
		return repo.findByDate(date);
	}

	@Override
	public List<Entry> findByMood(int mood) {
		return repo.findByMood(mood);
	}

	@Override
	public List<Entry> findByKeyword(String keyword) {
		keyword = "%"+keyword+"%";
		return repo.findByTitleLikeOrGratitudeLikeOrNoteLike(keyword, keyword, keyword);
	}

	@Override
	public Entry save(int id, Entry entry) {
		Optional<Entry> opt = repo.findById(id);
        if (opt.isPresent()) {
            Entry managed = opt.get();
            managed.setTitle(entry.getTitle());
            managed.setMood(entry.getMood());
            managed.setGratitude(entry.getGratitude());
            managed.setNote(entry.getNote());
            return repo.saveAndFlush(managed);
        }
        return null;

	}

	@Override
	public Entry add(Entry entry) {
//		if (entry != null) {
//		}
		repo.saveAndFlush(entry);
		return entry;
	}

	@Override
	public boolean remove(int id) {
		if (repo.findById(id).isPresent()) {			
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
	
}
