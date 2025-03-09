
export interface ERPConsultationRequest{
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
	/**	Business Name : Data	*/
	business_name?: string
	/**	Business Industry : Data	*/
	business_industry?: string
	/**	Key Areas You Want to Improve : Text Editor	*/
	key_areas_you_want_to_improve?: string
}