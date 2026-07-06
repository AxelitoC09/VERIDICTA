(function () {
  'use strict';

  var legalKnowledge = {
    laboral: {
      label: 'Labor Law',
      icon: 'fa-briefcase',
      questions: [
        {
          q: 'What are my rights if I am fired in Panama?',
          a: 'In Panama, the Labor Code (Law 8 of 1958) protects workers in case of dismissal. If the termination is unjustified, you are entitled to severance equivalent to 3.4 weeks of pay for each year worked (notice period + indemnity + vacation + thirteenth month). If the dismissal is justified (serious misconduct), the employer must prove the cause. We recommend contacting MITRADEL or a labor attorney to evaluate your specific case.'
        },
        {
          q: 'How long is the probation period in Panama?',
          a: 'The probation period in Panama can last up to 3 months under the Labor Code. During this period, either party may terminate the employment relationship without severance pay, provided the legal notice periods are respected.'
        },
        {
          q: 'Am I entitled to vacation and a thirteenth month salary?',
          a: 'Yes. Every worker in Panama is entitled to 30 days of paid vacation after 11 consecutive months of work. You are also entitled to the thirteenth month (an additional monthly salary paid in three installments: April, August, and December) and severance fund contributions, which the employer must deposit monthly.'
        }
      ]
    },
    inmobiliario: {
      label: 'Real Estate',
      icon: 'fa-home',
      questions: [
        {
          q: 'What documents do I need to buy property in Panama?',
          a: 'To buy property in Panama you need: (1) Updated Public Registry certificate, (2) Tax clearance certificate, (3) Cadastral appraisal, (4) Public deed before a notary, (5) Payment of transfer tax (2% on the sale price or appraisal, whichever is higher), and (6) Registration with the Public Registry. We recommend hiring a real estate attorney to verify liens and pending litigation.'
        },
        {
          q: 'What is the real estate transfer tax?',
          a: 'The real estate transfer tax in Panama is 2% on the higher value between the sale price and the cadastral appraisal. It must be paid at the time of deed execution. Exemptions exist for a first home under certain conditions according to Law 8 of 2010 and its amendments.'
        },
        {
          q: 'Can I rent a property without a written contract?',
          a: 'Although a verbal lease is possible, it is NOT recommended. Law 93 of 2019 (Urban Leasing Law) establishes rights and obligations for landlords and tenants. A written contract protects both parties and makes it easier to resolve disputes before the leasing tribunal.'
        }
      ]
    },
    empresarial: {
      label: 'Business Law',
      icon: 'fa-building',
      questions: [
        {
          q: 'How do I register a corporation in Panama?',
          a: 'To incorporate a Corporation (Sociedad Anónima) in Panama you must: (1) Draft the corporate bylaws, (2) Register the company with the Public Registry, (3) Obtain the operating notice (Single Operating Notice), (4) Register with the DGI to obtain a RUC tax ID, and (5) Open a corporate bank account. At least 2 shareholders and a minimum capital of USD $10,000 (with at least USD $1,000 paid in) are required. A corporate attorney can guide you through the entire process.'
        },
        {
          q: 'What is the operating notice?',
          a: 'The Single Operating Notice (Aviso Único de Operaciones) is the permit every company must obtain in Panama to operate legally. It is processed through MICI via the Panamá Emprende system. Without this notice, the company cannot invoice or operate commercially in a legal manner.'
        },
        {
          q: 'What are the tax obligations of a company in Panama?',
          a: 'Companies in Panama must: (1) File and pay Income Tax (25% on profits), (2) Withhold and pay ITBMS (7%) if providing taxable services or selling taxable goods, (3) Submit annual informational returns to the DGI, (4) Pay the annual flat fee (USD $300), and (5) Maintain updated accounting records.'
        }
      ]
    },
    migratorio: {
      label: 'Immigration',
      icon: 'fa-plane',
      questions: [
        {
          q: 'How can I obtain permanent residency in Panama?',
          a: 'There are several paths to permanent residency in Panama: (1) Investment residency (minimum USD $300,000 in real estate), (2) Pensionado residency (minimum pension of USD $1,000 per month), (3) Friendly Nations visa (50 eligible countries), (4) Residency through ties to a Panamanian citizen, and (5) Professional residency. Each category has specific requirements before the National Migration Service.'
        },
        {
          q: 'How long can I stay in Panama as a tourist?',
          a: 'Tourists may remain in Panama for up to 180 days (6 months) with a valid passport from most countries. Upon expiration, they must leave the country or apply for an extension or change of immigration status before the National Migration Service before their permit expires.'
        },
        {
          q: 'What is a work visa in Panama?',
          a: 'A work visa (work permit) requires a Panamanian employer to sponsor your application before MITRADEL and the National Migration Service. You will need an employment contract, medical certificates, apostilled criminal background checks, and proof that no qualified Panamanian is available for the position.'
        }
      ]
    },
    familia: {
      label: 'Family Law',
      icon: 'fa-users',
      questions: [
        {
          q: 'What are the requirements for divorce in Panama?',
          a: 'In Panama there are two types of divorce: (1) Mutual consent divorce (both spouses agree, faster process), and (2) Unilateral divorce on specific grounds (infidelity, abandonment, violence, etc.). The petition must be filed before the family court of the marital domicile, along with the marriage certificate, identification documents, and evidence as applicable.'
        },
        {
          q: 'How is child custody determined?',
          a: 'Custody in Panama is determined based on the best interests of the child. The family judge may grant shared or sole custody. Both parents have a child support obligation. Alimony is calculated according to the child\'s needs and the obligor\'s financial capacity.'
        },
        {
          q: 'Do I need a will in Panama?',
          a: 'Although not mandatory, a will is highly recommended to distribute your assets according to your wishes. In Panama you may execute an open will before a notary or a closed will. Without a will, intestate succession applies under the Family Code, where the spouse and descendants inherit in legal proportions.'
        }
      ]
    },
    penal: {
      label: 'Criminal Law',
      icon: 'fa-gavel',
      questions: [
        {
          q: 'What should I do if I am arrested in Panama?',
          a: 'If you are arrested in Panama you have the right to: (1) Remain silent, (2) Request a defense attorney immediately, (3) Contact a family member or embassy, (4) Not be tortured or mistreated, and (5) Be brought before a judge within 24 hours. Do not sign any document without legal advice.'
        },
        {
          q: 'What is flagrancy in Panama?',
          a: 'Flagrancy occurs when a person is caught committing a crime or immediately afterward. In this case, police may arrest them without a judicial warrant. They must be handed over to the competent authority (Public Prosecutor\'s Office) within a maximum of 24 hours.'
        },
        {
          q: 'Can I obtain bail in Panama?',
          a: 'Yes, in many offenses you may request provisional release on bail or alternative precautionary measures (such as periodic check-ins, travel restrictions, etc.). The judge evaluates the severity of the offense, criminal record, and flight risk. A criminal defense attorney can manage this request.'
        }
      ]
    },
    consumidor: {
      label: 'Consumer Law',
      icon: 'fa-shopping-cart',
      questions: [
        {
          q: 'What are my rights as a consumer in Panama?',
          a: 'Law 45 of 2007 on Consumer Protection guarantees: (1) Clear information about products and services, (2) Protection against misleading advertising, (3) The right to claim for defective products, (4) Minimum legal warranty, and (5) Access to conciliation mechanisms through ACODECO. You may file complaints at ACODECO offices or online.'
        },
        {
          q: 'Can I return a defective product?',
          a: 'Yes. If a product has manufacturing defects, you have the right to demand repair, replacement, or a refund within the warranty period. Keep your receipt and notify the merchant in writing. If they do not resolve the issue, contact ACODECO.'
        },
        {
          q: 'What do I do if a store overcharges me?',
          a: 'Verify that the charged price matches the displayed or advertised price. If there is an improper charge, request an immediate refund and file a complaint with ACODECO along with your receipt and evidence. The merchant may be sanctioned for abusive practices.'
        }
      ]
    },
    tributario: {
      label: 'Tax Law',
      icon: 'fa-calculator',
      questions: [
        {
          q: 'What is ITBMS and when must I pay it?',
          a: 'ITBMS (Tax on the Transfer of Movable Goods and Services) is Panama\'s VAT with a general rate of 7%. It applies to the sale of goods and provision of taxable services. If you are a merchant or professional, you must register with the DGI, charge ITBMS, and file monthly returns.'
        },
        {
          q: 'When must I file income tax in Panama?',
          a: 'Individuals and legal entities must file income tax annually with the DGI. The fiscal period runs from January 1 to December 31. Filing deadlines vary based on the last digit of the RUC (generally between March and April). Non-compliance results in fines and interest.'
        },
        {
          q: 'Are there tax exemptions in Panama?',
          a: 'Yes. Panama offers exemptions such as: (1) Tourism Incentives Law, (2) City of Knowledge, (3) Multinational Headquarters (SEM), (4) Free Trade Zones, and (5) Income tax exemption for export of services. Each regime has specific requirements that should be evaluated with a tax attorney.'
        }
      ]
    }
  };

  var defaultResponse = 'Thank you for your inquiry. This question requires a personalized evaluation of your situation. We recommend contacting one of our attorneys at Veridicta for professional legal advice tailored to your case. You can email us at Veridicta@gmail.com or call (507) 6609 5461.';

  var welcomeMessage = 'Hello! I am Veridicta AI, your virtual legal assistant for general inquiries about Panamanian law. Select a category or choose a frequently asked question to get started.\n\nNote: This information is for guidance only and does not constitute formal legal advice.';

  var messagesEl = document.getElementById('aiMessages');
  var inputEl = document.getElementById('aiUserInput');
  var sendBtn = document.getElementById('aiSendBtn');
  var chipsEl = document.getElementById('aiQuestionChips');
  var categoryBtns = document.querySelectorAll('.ai-category-btn');
  var isTyping = false;

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function createMessage(content, type) {
    var msg = document.createElement('div');
    msg.className = 'ai-message ' + type;

    var avatar = document.createElement('div');
    avatar.className = 'ai-message-avatar';
    avatar.innerHTML = type === 'bot'
      ? '<i class="fa fa-legal"></i>'
      : '<i class="fa fa-user"></i>';

    var bubble = document.createElement('div');
    bubble.className = 'ai-message-bubble';

    var paragraphs = content.split('\n');
    paragraphs.forEach(function (text) {
      if (text.trim()) {
        var p = document.createElement('p');
        p.textContent = text;
        bubble.appendChild(p);
      }
    });

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    return msg;
  }

  function showTyping() {
    var msg = document.createElement('div');
    msg.className = 'ai-message bot';
    msg.id = 'aiTypingMsg';

    var avatar = document.createElement('div');
    avatar.className = 'ai-message-avatar';
    avatar.innerHTML = '<i class="fa fa-legal"></i>';

    var bubble = document.createElement('div');
    bubble.className = 'ai-message-bubble';
    bubble.innerHTML = '<div class="ai-typing-indicator"><span></span><span></span><span></span></div>';

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  function hideTyping() {
    var typing = document.getElementById('aiTypingMsg');
    if (typing) typing.remove();
  }

  function addBotMessage(content, delay) {
    isTyping = true;
    sendBtn.disabled = true;
    showTyping();

    setTimeout(function () {
      hideTyping();
      messagesEl.appendChild(createMessage(content, 'bot'));
      scrollToBottom();
      isTyping = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }, delay || 900);
  }

  function addUserMessage(content) {
    messagesEl.appendChild(createMessage(content, 'user'));
    scrollToBottom();
  }

  function findAnswer(question) {
    var normalizedQ = question.toLowerCase().trim();
    var bestMatch = null;
    var bestScore = 0;

    Object.keys(legalKnowledge).forEach(function (catKey) {
      legalKnowledge[catKey].questions.forEach(function (item) {
        var normalizedItemQ = item.q.toLowerCase();
        var score = 0;
        var words = normalizedQ.split(/\s+/);

        words.forEach(function (word) {
          if (word.length > 3 && normalizedItemQ.indexOf(word) !== -1) {
            score += 1;
          }
        });

        if (normalizedItemQ === normalizedQ) {
          score = 100;
        }

        if (score > bestScore) {
          bestScore = score;
          bestMatch = item.a;
        }
      });
    });

    return bestScore >= 2 ? bestMatch : null;
  }

  function handleQuestion(question) {
    if (!question.trim() || isTyping) return;

    addUserMessage(question);
    inputEl.value = '';

    var answer = findAnswer(question);
    addBotMessage(answer || defaultResponse);
  }

  function renderChips(categoryKey) {
    chipsEl.innerHTML = '';
    var category = legalKnowledge[categoryKey];
    if (!category) return;

    category.questions.forEach(function (item) {
      var chip = document.createElement('button');
      chip.className = 'ai-question-chip';
      chip.type = 'button';
      chip.textContent = item.q;
      chip.addEventListener('click', function () {
        handleQuestion(item.q);
      });
      chipsEl.appendChild(chip);
    });
  }

  function renderAllChips() {
    chipsEl.innerHTML = '';
    var count = 0;

    Object.keys(legalKnowledge).forEach(function (catKey) {
      legalKnowledge[catKey].questions.forEach(function (item) {
        if (count >= 6) return;
        var chip = document.createElement('button');
        chip.className = 'ai-question-chip';
        chip.type = 'button';
        chip.textContent = item.q;
        chip.addEventListener('click', function () {
          handleQuestion(item.q);
        });
        chipsEl.appendChild(chip);
        count += 1;
      });
    });
  }

  function init() {
    if (!messagesEl) return;

    addBotMessage(welcomeMessage, 400);
    renderAllChips();

    categoryBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        categoryBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var catKey = btn.getAttribute('data-category');
        renderChips(catKey);

        var cat = legalKnowledge[catKey];
        if (cat) {
          addBotMessage('You have selected ' + cat.label + '. Choose one of the frequently asked questions or type your inquiry.', 600);
        }
      });
    });

    sendBtn.addEventListener('click', function () {
      handleQuestion(inputEl.value);
    });

    inputEl.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleQuestion(inputEl.value);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
