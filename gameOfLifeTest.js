var expect=require('chai').expect
var gameOfLife=require('./gameOfLife.js')
var alive=true
var dead=false
describe('Game of Life',function(){
	
	it('Any live cell with fewer than two live neighbors dies, as if by underpopulation',function(){
		var currentState=alive
		var neibhours=0
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(dead)
		neibhours=1
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(dead)
	})
	it('Any live cell with two or three live neighbors lives on to the next generation',function(){
		var	currentState=alive
		var neibhours=2
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(alive)
		neibhours=3
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(alive)
	})
	it('Any live cell with more than three live neighbors dies, as if by overpopulation',function(){
		var currentState=alive
		var neibhours=4
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(dead)
		nextState=5
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(dead)
		nextState=6
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(dead)
	})
	it('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction',function(){
		var currentState=dead
		var neibhours=3
		expect(gameOfLife.nextState(currentState,neibhours)).to.equal(alive)	
	})
})

describe('Game of Life Count Number of Alive',function(){
	it('It shoud return number when we pass 3X3 grid and (x,y) positions',function(){
		expect(gameOfLife.countAlive([[0,1,0],[1,0,1],[1,1,0]],1,1)).to.equal(5)
	})
	it('Shoud return Number when we pass grid of [true or false] and positions',function(){
		expect(gameOfLife.countAlive([[false,true,false],[true,false,true],[true,true,false]],1,1)).to.equal(5)
	})
	it('It shoud return number when we pass 4X3 grid',function(){
		expect(gameOfLife.countAlive([[0,1,0],[1,0,1],[1,1,0],[0,0,1]],2,1)).to.equal(4)
	})
	it('It shoud return 0 when we pass 1X1 grid',function(){
		expect(gameOfLife.countAlive([[0]],0,0)).to.equal(0)
	})
	it('Shoud return "Out of Range" when we pass positions out of grid',function(){
		expect(gameOfLife.countAlive([[0,1,0],[1,0,1],[1,1,0],[0,0,1]],3,3)).to.equal('Out of Range')
	})
	it('Shoud return "Empty grid" when we pass empty array ',function(){
		expect(gameOfLife.countAlive([],0,0)).to.equal('grid Empty')
	})
	it('Shoud return "Empty grid" when we pass  array of empty arrays',function(){
		expect(gameOfLife.countAlive([[],[],[]],0,0)).to.equal('grid Empty')
	})
})