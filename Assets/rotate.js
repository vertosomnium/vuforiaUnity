﻿ var rotationsPerMinute : float = 1;
 function Update()
 {
     transform.Rotate(0,0,6.0*rotationsPerMinute*Time.deltaTime);
 }