
//1.
const string=function(char, num){
	let line='';
	while(num>0){
		line=line+ char;
		num--;
	};
	return line
};

const row = function(space, stars){
	console.log(string(' ', space)+string('*', stars));
};

const printTriangle=function(height){
	let space = 0;
	let stars=(2*height)-1;
	
		while (height>0){
			row(space, stars) 
			stars=stars-2
			space++
			height--
		};

};

printTriangle(6)



//2
const arr = [ [1,2,3], [4,5,6] ];
const multiToSingle=function(arr){
	let a =0;
	let b=0;
	let Single=[];
	while(a<=1){
		while(b<arr[a].length){
		Single[Single.length]=arr[a][b];
		b++;
    }
	a++;
  b=0;
	}
  return Single

}
multiToSingle([ [1,2,3], [4,5,6] ])




//3.

const FindMinMax = function(arr, boo) {
	let max = arr[0];
	let index=1;
	let min = arr[0];
	let index2=1;


	if( boo == true) {
		while (index <arr.length) {
		if (max<=arr[index]){
			max = arr[index];
		}
		index++;
    }
    return max;
    } else if (boo==false){
		while (index2<arr.length){
			if(min>=arr[index2]){
				min = arr[index2];
			}
			index2++;	
		}
    return min;	
	}


};
FindMinMax([1,2,5,56],true)




//4.

 
const forEach = function(arr){
	const func=function(a){
		console.log(a)
	};
	let index=0;
	while(index<arr.length){
	    func(arr[index]);
	index++}
};
forEach([5,6,9])



//5.

const sum = function (arr){
	let a =0;
	let b=0;
	while (b<arr.length){
		a=a+arr[b]
  		b++}
    return a
};
sum([5,6,98])




//6.

const reverse = function(str){  //works 
  let newstr='';
  let index='str'.length;
  
  while(index>=0){ 
    newstr=newstr+str[index]; 
    index--
  }
  return newstr
 
};

reverse('Take')


//7.



let line='';
const oneline=function(n){

    while(line.length<n){
      line=line+'*';
    }

  return(line) ;
  };

const board=function(n){
  let height=0 ;
  while (height<n/2){
  
  console.log(oneline(n));
  height++
  if(height<=n/2){console.log( ' '+line);}
  };

};


board(6)





