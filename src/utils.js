import marked from 'marked';

export default class utils  {
	// generate text
	static getText(){
		return '\nHeading\n=======\n\nSub-heading\n-----------\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a\nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n----\n\n* apples\n* oranges\n* pears\n\n\nTable:\n-----\n\n|Name|Email|Password|\n|------|:------:|-----:|\n|Noy|60noypearl@gmail.com|secret|\n|John|Cena|winner|\n\n\__You Only Live Once__\n\n *[Noy Pearl](https://freecodecamp.com/60noy)*\n\n---'

	}
}
