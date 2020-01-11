import { INodePage, Node } from './node'

class Page {
  items: INodePage[] = []

  append = (item: Node) => {
    this.items.push(item.page)
    return this
  }
}

export {Page}
