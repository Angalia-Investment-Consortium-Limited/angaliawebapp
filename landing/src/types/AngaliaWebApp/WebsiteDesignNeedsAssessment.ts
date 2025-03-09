
export interface WebsiteDesignNeedsAssessment{
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
	/**	Website URL (If Any) : Data	*/
	website_url_if_any?: string
	/**	What Features Do You Need?  : Text	*/
	what_features_do_you_need?: string
}