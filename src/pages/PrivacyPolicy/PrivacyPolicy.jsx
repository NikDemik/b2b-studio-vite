import { privacyPolicyData } from '../../constants/agreement';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="container-full relative z-1 mx-auto px-4 py-32 md:pt-72 md:pb-24 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-start">
                    Политика конфиденциальности
                </h1>

                <div className="prose prose-lg max-w-none">
                    <div className="bg-main p-6 md:p-8 mb-6">
                        <p className="text-gray-600 italic">
                            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                        </p>
                    </div>

                    {privacyPolicyData.sections.map((section, index) => (
                        <section key={index} className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                            <div className="bg-main p-6">
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-2">
                                        {section.content.map((item, itemIndex) => (
                                            <li key={itemIndex}>• {item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{section.content}</p>
                                )}

                                {/* Блок контактов для соответствующего раздела */}
                                {section.title === '9. Контакты' && (
                                    <div className="mt-4">
                                        <p>
                                            <strong>Email:</strong>{' '}
                                            {privacyPolicyData.contacts.email}
                                            <br />
                                            <strong>Телефон:</strong>{' '}
                                            {privacyPolicyData.contacts.phone}
                                            <br />
                                            <strong>Адрес:</strong>{' '}
                                            {privacyPolicyData.contacts.address}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}

                    <div className="bg-main p-6 mt-8">
                        <p className="text-sm text-gray-600">
                            Настоящая Политика конфиденциальности может изменяться. Все изменения
                            будут опубликованы на данной странице.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" absolute z-0 -top-0 w-full pointer-events-none">
                <img src="/images/bg/hero.png" className=" max-lg:h-auto" alt="hero" />
            </div>
        </>
    );
};

export default PrivacyPolicy;
