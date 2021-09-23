var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jacob";
names[3]="Leo";
names[4]="janson";
names[5]="frank";
names[6]="Joseph";
names[7]="paul";
names[8]="Dora";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}