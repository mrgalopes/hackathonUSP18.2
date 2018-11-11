import React from 'react';
import { problemas } from '../problemas'

counterObj = {"Ruas e vias":0,
"Vazamento de água":0,
"Problema elétrico":0,
"Placas e sinalização":0,
"Outros":0};
for(problema in problemas){
	switch(problema.category){
		case "Ruas e vias":
			counterObj["Ruas e vias"] += 1;
			break;
		case "Vazamento de água":
			counterObj["Vazamento de água"] += 1;
			break;
		case "Problema elétrico":
			counterObj["Problema elétrico"] += 1;
			break;
		case "Placas e sinalização":
			counterObj["Placas e sinalização"] += 1;
			break;
		default:
			counterObj["Estruturas"] += 1;
	}
}