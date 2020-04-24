window.addEventListener('load', evt => {
	console.log('Window Loaded');
	init();
});

function init() {
	console.log('In init');
	document.searchForm.lookup.addEventListener('click', function(e){
		e.preventDefault();
		let entryId = document.searchForm.entryId.value;
		console.log(entryId);
		if (!isNaN(entryId) && entryId > 0) {
			getEntry(entryId);
		}
	});
	document.entryForm.add.addEventListener('click',function(e){
		e.preventDefault();
		createEntry(document.entryForm);
	});
}

function getEntry(entryId) {
	console.log('in getEntry');
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/entries/' + entryId);
	xhr.onreadystatechange = function() {
		if (xhr.status < 400 && xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			displayEntry(data);
		} else if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error('ERROR');
		}
	}
	xhr.send();
}

function displayEntry(entry) {
	var dataDiv = document.getElementById('entryDiv');
	dataDiv.textContent = '';
	
	if(entry.date != undefined){
		let title = document.createElement('h2');
		let date = document.createElement('h3');
		let mood = document.createElement('h4');
		let gratitude = document.createElement('blockquote');
		let note = document.createElement('blockquote');
		
		title.textContent = entry.id + '    ' + entry.title;
		date.textContent = entry.date;
		mood.textContent = entry.mood;
		gratitude.textContent = entry.gratitude;
		note.textContent = entry.note;
		
		dataDiv.appendChild(title);
		dataDiv.appendChild(date);
		dataDiv.appendChild(mood);
		dataDiv.appendChild(gratitude);
		dataDiv.appendChild(note);
		
		let edit = document.createElement('button');
		let remove = document.createElement('button');
		edit.textContent = 'Edit Entry';
		remove.textContent = 'Remove Entry';
		
		let id = entry.id;
		console.log(id);

		edit.addEventListener('click', function(e){
			e.preventDefault();
			if (!isNaN(id) && id > 0) {
				editEntry(entry);
			}
		});
		
		remove.addEventListener('click', function(e){
			e.preventDefault();
			if (!isNaN(id) && id > 0) {
				removeEntry(id);
			}
		});
		
		dataDiv.appendChild(edit);
		dataDiv.appendChild(remove);
	}
	else{
		// let noEntry = document.createElement('h4');
		// noEntry.textContent = 'No Entry';
		// dataDiv.appendChild(noEntry);
		document.entryDiv.textContent = 'No Entry';
	}
}
	
function createEntry(formObj){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/entries');
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { 
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
		  displayEntry(data);
		  document.entryForm.reset();
	    }
	    else {
	      console.log("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	var entryObject = {
			  id: formObj.id.value,
			  title: formObj.title.value,
			  date: formObj.date.value,
			  mood: formObj.mood.value,
			  gratitude: formObj.gratitude.value,
			  note: formObj.note.value  
			};
	var entryObjectJson = JSON.stringify(entryObject); 
	xhr.send(entryObjectJson);
}

function removeEntry(entryId){
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/entries/'+entryId);
	xhr.setRequestHeader("Content-type", "application/json"); 
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status < 400 ) { 
	      var data = JSON.parse(xhr.responseText);
	      console.log(data);
		  document.entryDiv.innerHTML = '';
		  document.entryDiv.textContent = 'Entry Removed';
	    }
	    else {
	      console.log("DELETE request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	};
	
	xhr.send(null);
}

// JUST A TEMPLATE STILL NEEDS DONE !!!
function editEntry(entry){
	let form = document.entryForm;
	form.id.value = entry.id;
	form.title.value = entry.title;
	form.date.value = entry.date;
	form.mood.value = entry.mood;
	form.gratitude.value = entry.gratitude;
	form.note.value = entry.note;
}