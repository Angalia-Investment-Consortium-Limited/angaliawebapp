
export interface ContactWebsiteMessage{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Firstname : Data	*/
	firstname?: string
	/**	Lastname : Data	*/
	lastname?: string
	/**	emailaddress : Data	*/
	emailaddress?: string
	/**	phone : Data	*/
	phone?: string
	/**	website : Data	*/
	website?: string
	/**	discuss : Data	*/
	discuss?: string
	/**	message : Data	*/
	message?: string
	/**	Amended From : Link - Contact Website Message	*/
	amended_from?: string
}