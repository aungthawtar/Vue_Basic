new Vue ({
    el : "#app",
    data : {
        newStudent : {name : "" , address : ""},
        students : [],
    },
    methods : {
        addStudent(){
            var name = this.newStudent.name.trim();
            var address = this.newStudent.address.trim();
            if(name && address){
                this.students.push({name : name , address : address});
                this.newStudent = {name: "" , address : ""};
                $('#name').focus();
            }
        },
        deleteStudent($index){
            this.students.splice($index ,1);
        }
    }
});