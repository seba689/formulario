
function submit(x,y,z,j,k){
x = document.getElementById('name').value;
y = document.getElementById('fecha').value;
z = document.getElementById('opcion').value;
j =  document.getElementById('mail').value;
k = document.getElementById('inlineFormCustomSelectPref1').value;
l = document.getElementById('alert').value; 
m = document.getElementById('validado').value;
n = document.getElementById('mal').value;
    if(x!=[]){
        if(y<2002){
            if(z==1 || z==2 || z==3){
                if(j!=[]){
                    if(k==1 || k==2 || k==3 || k==4 || k==5 ){
                       display();
                    }
                    else{
                        mal();
                    }
                }
                else{
                    mal();
                }
            }
            else{
                mal();
            }
        }
        else{
            mal();
        }
    }
    else{
        mal();
    } 
}

function display(){
   l= document.getElementById('alert');
   m = document.getElementById('validado');
   l.style.display = 'inherit'; 
   m.style.display = 'inherit';
}

function mal(){
    n = document.getElementById('mal');
    l= document.getElementById('alert');
    n.style.display = 'inherit';
    l.style.display = 'inherit'; 
   
}