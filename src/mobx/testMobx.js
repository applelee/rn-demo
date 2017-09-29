import { observable, computed, action } from 'mobx'

/**试例**/
class TextMobx {
	@observable name = '洞天'

	@action.bound
	changeName(){
		this.name = '福地'
	}
}

export default new TextMobx
