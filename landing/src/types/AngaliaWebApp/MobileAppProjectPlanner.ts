
export interface MobileAppProjectPlanner{
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
	/**	Type of App Needed : Select	*/
	type_of_app_needed?: "E-commerce," | "Booking," | "Social," | "Utility," | "Lifestyle," | "Game," | "Sports," | "Music," | "Productivity," | "News/Information Outlets" | "Custom" | "Others"
	/**	Budget Range  : Select	*/
	budget_range?: "6M-9M" | "10M-24M" | "25M-99M" | "100M-170M" | "Above all the options iisted"
	/**	Do You Have an Existing App?  : Select	*/
	do_you_have_an_existing_app?: "Yes" | "No"
}