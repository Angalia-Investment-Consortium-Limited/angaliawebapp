
export interface BusinessNeedsAssessment{
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
	/**	Select Your Main Business Challenge : Select	*/
	select_your_main_business_challenge?: "Digital Presence & Branding– Need a website, mobile app, or brand identity." | "Customer Engagement & Communication – Need better ways to interact with customers (chatbots, call centers, VOIP)." | "Operational Efficiency– Need automation and better workflows (ERP, business optimization)." | "Financial Management & Accounting*– Need better accounting tools, finance tracking, or ERP customization." | "Retail & Sales Optimization– Need a POS system for seamless transactions and inventory management." | "Education & Training Management– Need an LMS for employee training or school management." | "Security & Risk Management – Need physical security information systems or cybersecurity solutions." | "Agribusiness & Farm Management – Need agritech solutions for farming efficiency and market access." | "Scaling & Growth Strategy– Need tech solutions to scale the business efficiently." | "Custom Business Solutions– Need a tailor-made solution to address a unique business need."
	/**	Preferred Contact Method : Data	*/
	referred_contact_method?: string
}