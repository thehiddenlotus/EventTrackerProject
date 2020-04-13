package com.skilldistillery.grateful.controllers;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.grateful.entities.Entry;
import com.skilldistillery.grateful.services.EntryService;

@RestController
@RequestMapping("api")
public class EntryController {
	
	@Autowired
	private EntryService svc;
	
	@GetMapping("entries")
	public List<Entry> showAll(){
		return svc.findAll();
	}
	
	@GetMapping("entries/{id}")
	public Entry show(@PathVariable Integer id){
	  return svc.findById(id);
	}
	
	@PostMapping("entries")
	public Entry save(@RequestBody Entry entry, HttpServletRequest req, HttpServletResponse resp){
		try {
			entry = svc.save(entry);
			resp.setStatus(201);
			StringBuffer reqURL = req.getRequestURL();
			reqURL.append("/").append(entry.getId());
			resp.setHeader("Location", reqURL.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			entry = null;
		}
		return entry;
	}
	
	@DeleteMapping("entries/{id}")
	public void delete(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse resp) {
		try {
			if(svc.remove(id)) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(409);
		}
	}
	
	@GetMapping("entries/search/date/{date}")
	public List<Entry> searchByDate(@PathVariable String date){
		LocalDate ld = LocalDate.parse(date);
		return svc.findByDate(ld);
	}

	@GetMapping("entries/search/keyword/{keyword}")
	public List<Entry> searchByKeyword(@PathVariable String keyword){
		return svc.findByKeyword(keyword);
	}
	
	@GetMapping("entries/search/mood/{mood}")
	public List<Entry> searchByMood(@PathVariable Integer mood){
		return svc.findByMood(mood);
	}
}
