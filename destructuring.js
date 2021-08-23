//1

const bioData = {
    name : "Jay",
    age : 22,
    deg : 'MCA',
    hobb : {
            first : 'playing',
            sec : 'photography'
    }
}
let {name:myname,age:ages,deg, hobb} = bioData;
console.log(`my name is ${myname}. My age is ${ages} and My highesr qual. is ${deg}. I love doing ${hobb.sec}`);
