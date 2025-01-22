// Variable declaration 
    var raDius = 6.378e6;
    const pI = 3.14; 

    var circumFerence = 2*pI*raDius;
    var surfaceArea = 4*pI*(raDius**2);
    var sphereVolume = (4*pI*(raDius**3))/3;
// Variable declaration

//Program Execution
    document.write("The radius of the sphere is " + raDius + "." + '<br>');
    document.write("The circumference is " + circumFerence + "." + '<br>');
    document.write("The surface area is " + surfaceArea + "." + '<br>');
    document.write("The volume is " + sphereVolume + "." + '<br>');
//Program Execution
