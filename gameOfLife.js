var nextState=function(currentState,neibhours){
		return ((neibhours==2 && currentState) || neibhours==3) ?true:false;
}

var countAlive=function(grid,x,y){
	if(grid.length==0){
		return 'grid Empty'
	}
	else if(grid[0].length==0){
		return 'grid Empty'
	}
	var rows=grid.length
	var columns=grid[0].length
	if(x<0 || x>=rows || y<0 || y>=columns){
		return 'Out of Range';
	}
	var count=0
	for(let i=x-1;i<=x+1;i++){
		for(let j=y-1;j<=y+1;j++){
			if( i>=0 && i<=rows-1 && j>=0 && j<=columns-1 && (i!=x || j!=y)){
				if(grid[i][j]){
					count++;
				}
			}
		}
	}
	return count;
}
module.exports={
	nextState:nextState,
	countAlive:countAlive
}