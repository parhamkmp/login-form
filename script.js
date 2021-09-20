const userInput=document.querySelector('#user');
const passInput=document.querySelector('#pass');
const btn=document.querySelector('.btn');
const pp=document.querySelector('.pp');
const all=document.querySelector('.frm');
passInput.value='';
userInput.value='';

function login(){
	var xhr=new XMLHttpRequest();
	xhr.open('GET','JSON/persons.json',true);
	xhr.onload=function(){
		if(this.status==200)
		{
			var users=JSON.parse(this.responseText);
			var arrayu=[users[0],users[1],users[2],users[3]];
			var condition=userInput.value==arrayu[0].username&&passInput.value==arrayu[0].password||userInput.value==arrayu[1].username&&passInput.value==arrayu[1].password||userInput.value==arrayu[2].username&&passInput.value==arrayu[2].password||userInput.value==arrayu[3].username&&passInput.value==arrayu[3].password;
		    

		    if(condition) {
				pp.innerText='*You LOGINED !';
				pp.classList.add('alert-success');
				pp.classList.remove('bg-secondary');
				pp.classList.remove('alert-danger');
				all.style.backgroundColor='#00ff1012';
				all.style.border='#50ff004d 0.5px solid';
				all.classList.add('fade');
				all.classList.add('d-none');
				document.querySelector('.userPanel').classList.remove('fade');
				document.querySelector('.userPanel').classList.remove('d-none');
			}
				
		    else {
		    	pp.innerText='*Username or Password Incorrect !';
		    	pp.classList.add('alert-danger');
		    	pp.classList.remove('bg-secondary');
		    	all.style.backgroundColor='#ff07070f';
				all.style.border='#ff00004d 0.5px solid';
		    } 




		}
	};

	xhr.send();
}



// Functions
function profile(j){
	var xhr=new XMLHttpRequest();
	var url='https://api.github.com/users/'+j;
	xhr.open('GET',url,true);
	xhr.onload=function(){
	if(this.status==200) {
		var user=JSON.parse(this.responseText);
		document.querySelector('.usr').innerText=user.login;
		document.querySelector('.name').innerText=user.name;
		document.querySelector('.bio-code').innerText=user.bio;
		if(document.querySelector('.bio-code').innerText=='')
		{
			document.querySelector('.bio-code').innerText='The'+' "'+user.login+'" '+'not has bio';
			document.querySelector('.bio-code').classList.remove('text-muted');
			document.querySelector('.bio-code').classList.add('text-danger');
		}
		document.querySelector('.create-code').innerText=user.created_at;
		document.querySelector('.location-code').innerText=user.location;
		document.querySelector('.img').setAttribute('src',user.avatar_url);
		// document.querySelector('.flws').setAttribute('href',user.followers_url);
		// document.querySelector('.flwn').setAttribute('href','');
		document.querySelector('.flwsN').innerText=user.followers;
		document.querySelector('.flwnN').innerText=user.following;
		document.querySelector('.id').setAttribute('href',user.html_url);
		document.querySelector('.goBackL').classList.remove('d-none');
		if(document.querySelector('.location-code').innerText=='')
		{
			document.querySelector('.location-code').innerText='The'+' "'+user.login+'" '+'not has location';
			document.querySelector('.location-code').classList.remove('text-muted');
			document.querySelector('.location-code').classList.add('text-danger');
		}
	}
};
	xhr.send();
}//profile FUNC

function loadPRF()
{
	if(userInput.value=='parhamKMP'&&passInput.value=='5523'){ 
	 	profile('parhamkmp') 
	}

	if(userInput.value=='arkantos1482'&&passInput.value=='1482'){ 
	 	profile('arkantos1482') 
	}

	if(userInput.value=='ali-554'&&passInput.value=='8567'){ 
	 	profile('ali') 
	}

	if(userInput.value=='RezaHashemi'&&passInput.value=='7895'){ 
	 	profile('reza') 
	}
}



btn.addEventListener('click',login);
btn.addEventListener('click',loadPRF);




function followingUsers(i)
{
	var xhr=new XMLHttpRequest();
	var url='https://api.github.com/users/'+i+'/following';
	xhr.open('GET',url,true);
	xhr.onload=function(){
		if(this.status==200)
		{
			var users=JSON.parse(this.responseText);
			for(var i in users)
			{
				var img=document.createElement('img');
				img.className=' mg-circle img-user rounded-circle imgFLLOW';
				img.setAttribute('src',users[i].avatar_url);

				var p=document.createElement('a');
				p.className='col-sm-2 d-inline';
				p.innerText=users[i].login;
				p.setAttribute('href',users[i].html_url)



				var div=document.createElement('div');
				div.className='p-3 mt-sm-5 mt-5 followingUsers';

				document.querySelector('.bootstrap').append(div);
				document.querySelector('.userPanel').classList.add('d-none');
				document.querySelector('.flowi').classList.remove('d-none')

				div.append(img);
				div.append(p);
			}
		}
	};

	xhr.send();
}




function followersUsers(i)
{
	var xhr=new XMLHttpRequest();
	var url='https://api.github.com/users/'+i+'/followers';
	xhr.open('GET',url,true);
	xhr.onload=function(){
		if(this.status==200)
		{
			var users=JSON.parse(this.responseText);
			for(var i in users)
			{
				var img=document.createElement('img');
				img.className=' mg-circle img-user rounded-circle imgFLLOW2';
				img.setAttribute('src',users[i].avatar_url);

				var p=document.createElement('a');
				p.className='col-sm-2 d-inline';
				p.innerText=users[i].login;
				p.setAttribute('href',users[i].html_url)



				var div=document.createElement('div');
				div.className='p-3 mt-sm-5 mt-5 followersUsers';

				document.querySelector('.bootstrap2').append(div);

				document.querySelector('.userPanel').classList.add('d-none');
				document.querySelector('.flows').classList.remove('d-none')

				div.append(img);
				div.append(p);

				
			}
		}
	};

	xhr.send();
}




const flwsBtn=document.querySelector('.flws');
const GoBk=document.querySelector('.goBackS');
const usr=document.querySelector('.usr');
const flwsNumber=document.querySelector('.flwsN');

flwsBtn.addEventListener('click',function(){
if(flwsNumber.innerText > 0)
{
	if(usr.innerText=='ali')
	{
		followersUsers('ali');
	}

	if(usr.innerText=='parhamkmp')
	{
		followersUsers('parhamkmp');
	}

	if(usr.innerText=='arkantos1482')
	{
		followersUsers('arkantos1482');
	}

	if(usr.innerText=='reza')
	{
		followersUsers('reza');
	}

	GBL.classList.add('d-none');
}

if(flwsNumber.innerText==0)
{
	alert('You Not Have Follower !');
}

});


GoBk.addEventListener('click',function(){
	document.querySelector('.userPanel').classList.remove('d-none');
	document.querySelector('.flows').classList.add('d-none')
	GBL.classList.remove('d-none');
});






const flwiBtn=document.querySelector('.flwn');
const GoBk2=document.querySelector('.goBackI');
const flwnNumber=document.querySelector('.flwnN');
flwiBtn.addEventListener('click',function(){

if(flwnNumber.innerText > 0)
{
	if(usr.innerText=='ali')
	{
		followingUsers('ali');
	}

	if(usr.innerText=='parhamkmp')
	{
		followingUsers('parhamkmp');
	}

	if(usr.innerText=='arkantos1482')
	{
		followingUsers('arkantos1482');
	}

	if(usr.innerText=='reza')
	{
		followingUsers('reza');
	}

	GBL.classList.add('d-none');
}

if(flwnNumber.innerText==0)
{
	alert('You Not Have Following !');
}

});


GoBk2.addEventListener('click',function(){
	document.querySelector('.userPanel').classList.remove('d-none');
	document.querySelector('.flowi').classList.add('d-none');
	GBL.classList.remove('d-none');
});



const GBL=document.querySelector('.goBackL');
GBL.addEventListener('click', function() {
	document.querySelector('.userPanel').classList.add('d-none');
	document.querySelector('.frm').classList.remove('d-none');
	document.querySelector('.frm').classList.remove('fade');
	GBL.classList.add('d-none');
});