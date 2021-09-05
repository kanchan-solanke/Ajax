let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makeAJAXCall(methodType, url, callback ,async = true, data = null){
	let hhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			console.log("state Changed Ready State:"+ xhr.onreadyState+"Status:"+xhr.status);
			if(xhr.onreadyState == 4){
				if(xhr.status == 200 || xhr.status ===201){
callback(xhr.responseText);

}
else if(xhr.status >= 400){
	console.log("Handle 400 client Error");
}
			}		}
	

	xhr.setRequestHeader("Content-Type","application/json");
	xhr.send(JSON.stringify(data));
}
else xhr.send();
console.log(methodType+"request sent to the server");
}

const getURL =" http://127.0.0.1:3000/employees/1";
{
	function getUserDetails(data){
		console.log("Get User Data:"+data)
	}

	makeAJAXCall("GET", getURL, getUserDetails);

	const deleteURL="http://localhost:3000/employees/4";
	function userDeleted(data) {
		console.log("User Deleted"+ data)	}

		makeAJAXCall("DELETE", deleteURL, userDeleted, false);

		const postURL = "http://localhost:3000/employees";
		const emplData={"name":"Kanchan","salary": "5000"};

		function userDeleted(data){
			console.log("User Deleted"+ data)
		}

		makeAJAXCall("POST", postURL, userAdded, true, emplData);
}