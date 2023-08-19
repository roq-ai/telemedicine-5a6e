interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Doctor', 'Technical Support', 'Nurse'],
  tenantName: 'Organization',
  applicationName: 'telemedicine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
