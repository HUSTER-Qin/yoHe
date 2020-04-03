class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
	public get value() : string {
		return this.name
	}
	
}

abstract class Website {
  public abstract Use(user: User): void;
}

class conWebSite extends Website {
  private name: string;
  constructor(name:string) {
    super();
    this.name = name;
  }
	public Use (user:User) {
		console.log(`网站分类：${this.name}---用户：${user.value}`);
	}
}

class webSiteFactory{
	private list?:any
	constructor() {
		this.list = new Map()
	}

	getWebsiteCategory (key: string) {
		if (!this.list.has(key)) {
			this.list.set(key, new conWebSite(key))
		}
		return this.list.get(key)
	}	
	getWebsiteCount () {
		return this.list.size
	}
}

const webF = new webSiteFactory()

const fx = webF.getWebsiteCategory('网站模板')
fx.Use(new User("小草"))

const fx2 = webF.getWebsiteCategory('网站模板')
fx.Use(new User("小草2"))

console.log(webF.getWebsiteCount());

