
export interface WebAppointmentMessage{
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
	/**	Fullname : Data	*/
	fullname?: string
	/**	Phone : Data	*/
	phone?: string
	/**	Date : Data	*/
	date?: string
	/**	time : Data	*/
	time?: string
	/**	discuss : Data	*/
	discuss?: string
}