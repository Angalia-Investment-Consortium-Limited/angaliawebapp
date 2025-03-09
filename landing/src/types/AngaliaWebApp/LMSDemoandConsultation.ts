
export interface LMSDemoandConsultation{
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
	/**	Name : Data	*/
	name1?: string
	/**	Email : Data	*/
	email?: string
	/**	Institution/Business Name : Data	*/
	institutionbusiness_name?: string
	/**	What Do You Need an LMS For? : Text Editor	*/
	what_do_you_need_an_lms_for?: string
}